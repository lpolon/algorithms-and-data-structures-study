import { binarySearch, searchInsert } from './solution';

describe('searchInsert()', () => {
  test('[1, 3, 5, 6], 5 returns 2', () => {
    const nums = [1, 3, 5, 6];
    const target = 5;
    const output = 2;
    const result = searchInsert(nums, target);
    expect(result).toStrictEqual(output);
  });
  test('[1, 3, 5, 6], 2 returns 1', () => {
    const nums = [1, 3, 5, 6];
    const target = 2;
    const output = 1;
    const result = searchInsert(nums, target);
    expect(result).toStrictEqual(output);
  });
  test('[1, 3, 5, 6], 7 returns 4', () => {
    const nums = [1, 3, 5, 6];
    const target = 7;
    const output = 4;
    const result = searchInsert(nums, target);
    expect(result).toStrictEqual(output);
  });
  test('[1, 3, 5, 6], 0 returns 0', () => {
    const nums = [1, 3, 5, 6];
    const target = 0;
    const output = 0;
    const result = searchInsert(nums, target);
    expect(result).toStrictEqual(output);
  });
  test('empty array', () => {
    expect(searchInsert([], 10)).toStrictEqual(0);
  });
});

describe('binarySearch():', () => {
  test('[1, 3, 5, 6], 5 returns 2', () => {
    const nums = [1, 3, 5, 6];
    const target = 5;
    const output = 2;
    const result = binarySearch(nums, target);
    expect(result).toStrictEqual(output);
  });
  test('[1, 3, 5, 6], 2 returns -1', () => {
    const nums = [1, 3, 5, 6];
    const target = 2;
    const output = -1;
    const result = binarySearch(nums, target);
    expect(result).toStrictEqual(output);
  });
  test('[1, 3, 5, 6], 6 returns 3', () => {
    const nums = [1, 3, 5, 6];
    const target = 6;
    const output = 3;
    const result = binarySearch(nums, target);
    expect(result).toStrictEqual(output);
  });
  test('[1, 3, 5, 6], 1 returns 0', () => {
    const nums = [1, 3, 5, 6];
    const target = 1;
    const output = 0;
    const result = binarySearch(nums, target);
    expect(result).toStrictEqual(output);
  });
  test('empty array return -1', () => {
    expect(binarySearch([], 10)).toStrictEqual(-1);
  });
});
