const getDiffToTarget = (target: number, nums: number[]): number =>
  nums.reduce((diff, n) => diff - n, target);

export function unguided__threeSum(numsArg: number[]): number[][] {
  if (numsArg.length === 0) return [];
  if (numsArg.length < 3) return [];

  const nums = [...numsArg];
  nums.sort((a, b) => a - b);

  const tripletsSet: Set<string> = new Set();

  for (const [i, value] of nums.entries()) {
    for (let j = i + 1; j < nums.length; j += 1) {
      const diff = getDiffToTarget(0, [value, nums[j]]);
      const foundValue = binarySearch({
        numsArr: nums,
        target: diff,
        skipIndex: [i, j],
      });
      if (!foundValue) continue;
      const triplet = [value, nums[j], foundValue];
      triplet.sort((a, b) => a - b);
      tripletsSet.add(JSON.stringify(triplet));
    }
  }
  const result: number[][] = [];
  for (const [stringTriplet] of tripletsSet.entries()) {
    const triplet: number[] = Array.from(Object.values(JSON.parse(stringTriplet)));
    result.push(triplet);
  }
  return result;
}

function binarySearch({
  numsArr,
  target,
  skipIndex,
}: {
  numsArr: number[];
  target: number;
  skipIndex: number[];
}): number | undefined {
  let low = 0;
  let high = numsArr.length - 1;
  let mid;
  let midValue;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    midValue = numsArr[mid];
    if (midValue === target && !skipIndex.includes(mid)) return midValue;
    if (midValue < target) low = mid + 1;
    else high = mid - 1;
  }
  return undefined;
}
