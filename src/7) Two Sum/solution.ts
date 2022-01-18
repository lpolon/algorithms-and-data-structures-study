type Ht = Map<number, number>;

export function unguided__twoSum(nums: number[], target: number): [number, number] | void {
  const ht = nums.reduce<Ht>((acc, curr, i) => {
    const diffToTarget = target - curr;
    acc.set(diffToTarget, i);
    return acc;
  }, new Map());

  return findPair(nums, 0, ht);
}

function findPair(nums: number[], index: number, ht: Ht): [number, number] | void {
  const foundMatchingIndex = ht.get(nums[index]);
  if (isValidMatchingNumber(foundMatchingIndex, index)) return [index, foundMatchingIndex];
  return findPair(nums, index + 1, ht);
}
function isValidMatchingNumber(
  foundMatchingIndex: number | undefined,
  index: number,
): foundMatchingIndex is number {
  return Boolean(foundMatchingIndex) && foundMatchingIndex !== index;
}

export function two_pointer_method__twoSum(
  nums: number[],
  target: number,
): [number, number] | void {
  for (let i = 0; i < nums.length; i += 1) {
    const current = nums[i];
    const diff = target - current;
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[j] === diff) return [i, j];
    }
  }
}

export function single_pass__twoSum(nums: number[], target: number): [number, number] | void {
  const ht: Record<number, number> = {};

  for (const [index, curr] of nums.entries()) {
    const diff = target - curr;
    if (diff in ht) {
      const foundHtIndex = ht[diff];
      return [foundHtIndex, index];
    }
    ht[curr] = index;
  }
}
