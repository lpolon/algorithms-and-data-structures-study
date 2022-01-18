type SearchInsertType = (nums: number[], target: number) => number;

export const naiveSearchInsert: SearchInsertType = function (nums, target) {
  const index = nums.findIndex((e) => target === e || target < e);
  return index !== -1 ? index : nums.length;
};

export const searchInsert: SearchInsertType = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  let midValue;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    midValue = nums[mid];
    if (midValue === target) return mid;
    if (midValue < target) left = mid + 1;
    else right = mid - 1;
  }

  return left; // holy fuck
};

// https://www.youtube.com/watch?v=Xdg9o5yScOI&list=PLn2ipk-jqgZiAHiA70hOxAj8RMUeqYNK3&index=28&t=0s Thanks!
export const binarySearch: SearchInsertType = function (numsArr, target) {
  let low = 0;
  let high = numsArr.length - 1;
  let mid; // round down or up doesn't matter as long as it stays consistent.
  // is mid equal the target? return target index.
  // is mid smaller than
  let midValue;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    midValue = numsArr[mid];
    if (midValue === target) return mid;
    if (midValue < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
};
