export function leo__threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const output: number[][] = [];
  for (let i = 0; i < nums.length; i += 1) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const currentTriplet = [nums[i], nums[left], nums[right]];
      const currentSum = currentTriplet.reduce((acc, curr) => acc + curr, 0);
      if (currentSum < 0) {
        left += 1;
        continue;
      }
      if (currentSum > 0) {
        right -= 1;
        continue;
      }
      output.push(currentTriplet);
      break;
    }
  }
  return deduplicate(output);
}

function deduplicate(nums: number[][]): number[][] {
  const tripletsSet: Set<string> = new Set();
  nums.forEach((triplet) => {
    triplet.sort((a, b) => a - b);
    tripletsSet.add(JSON.stringify(triplet));
  });
  const result: number[][] = [];
  for (const [stringTriplet] of tripletsSet.entries()) {
    const triplet: number[] = Array.from(Object.values(JSON.parse(stringTriplet)));
    result.push(triplet);
  }
  return result;
}
