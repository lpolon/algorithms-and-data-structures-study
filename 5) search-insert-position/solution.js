export function naiveSearchInsert(nums = [], target) {
  const index = nums.findIndex(e => target === e || target < e)
  return index !== -1 ? index : nums.length
}

export function binarySearch(nums, target) {
  
}