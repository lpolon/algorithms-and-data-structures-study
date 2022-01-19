export function aarons__threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const output: number[][] = [];
  for (let i = 0; i < nums.length - 2; i += 1) {
    let left = i + 1;
    let right = nums.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
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
      while (left < right && nums[right - 1] === nums[right]) {
        right -= 1;
      }

      while (left < right && nums[left + 1] === nums[left]) {
        left += 1;
      }
      right -= 1;
      left += 1;
    }
  }
  return output;
}
