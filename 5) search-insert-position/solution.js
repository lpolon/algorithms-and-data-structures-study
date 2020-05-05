export function naiveSearchInsert(nums = [], target) {
  const index = nums.findIndex(e => target === e || target < e)
  return index !== -1 ? index : nums.length
}

// https://www.youtube.com/watch?v=Xdg9o5yScOI&list=PLn2ipk-jqgZiAHiA70hOxAj8RMUeqYNK3&index=28&t=0s Thanks!
export function binarySearch(nums, target) {
  let lowI = 0
  let highI = nums.length - 1
  let midI // round down or up doesn't matter as long as it stays consistent.
  // is mid equal the target? return target index.
  // is mid smaller than
  while (lowI <= highI) {
    midI = Math.floor((lowI + highI) / 2)
    if (nums[midI] === target) return midI
    if (midI < target) lowI = midI + 1
    else highI = midI - 1
  }
  return -1
}
