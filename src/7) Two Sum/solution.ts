type Ht = Map<number, number>;

export function unguided__two_sum(nums: number[], target: number): [number, number] | void {
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
