export function naiveSearchInsert(nums = [], target) {
  const index = nums.findIndex(e => target === e || target < e)
  return index !== -1 ? index : nums.length
}

export function searchInsert(nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid
  let midValue
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    midValue = nums[mid]
    if (midValue === target) return mid
    if (midValue < target) left = mid + 1
    else right = mid - 1
  }
  return -1
}

// https://www.youtube.com/watch?v=Xdg9o5yScOI&list=PLn2ipk-jqgZiAHiA70hOxAj8RMUeqYNK3&index=28&t=0s Thanks!
export function binarySearch(numsArr, target) {
  let lowI = 0
  let highI = numsArr.length - 1
  let midI // round down or up doesn't matter as long as it stays consistent.
  // is mid equal the target? return target index.
  // is mid smaller than
  let midValue
  while (lowI <= highI) {
    midI = Math.floor((lowI + highI) / 2)
    midValue = numsArr[midI]
    if (midValue === target) return midI
    if (midValue < target) lowI = midI + 1
    else highI = midI - 1
  }
  return -1
}
