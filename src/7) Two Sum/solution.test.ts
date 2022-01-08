import { single_pass__twoSum, two_pointer_method__twoSum, unguided__twoSum } from './solution';

describe('unguided solution', () => {
  test('example 1', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;

    const output = unguided__twoSum(nums, target);

    expect(output).toEqual([0, 1]);
  });
  test('example 2:', () => {
    const nums = [3, 2, 4];
    const target = 6;

    const output = unguided__twoSum(nums, target);

    expect(output).toEqual([1, 2]);
  });
  test('example 3:', () => {
    const nums = [3, 3];
    const target = 6;

    const output = unguided__twoSum(nums, target);

    expect(output).toEqual([0, 1]);
  });
  test('example 4:', () => {
    const nums = [1, 3, 4, 2];
    const target = 6;

    const output = unguided__twoSum(nums, target);

    expect(output).toEqual([2, 3]);
  });
});

describe('two pointer method solution (naive)', () => {
  test('example 1', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;

    const output = two_pointer_method__twoSum(nums, target);

    expect(output).toEqual([0, 1]);
  });
  test('example 2:', () => {
    const nums = [3, 2, 4];
    const target = 6;

    const output = two_pointer_method__twoSum(nums, target);

    expect(output).toEqual([1, 2]);
  });
  test('example 3:', () => {
    const nums = [3, 3];
    const target = 6;

    const output = two_pointer_method__twoSum(nums, target);

    expect(output).toEqual([0, 1]);
  });
  test('example 4:', () => {
    const nums = [1, 3, 4, 2];
    const target = 6;

    const output = two_pointer_method__twoSum(nums, target);

    expect(output).toEqual([2, 3]);
  });
});

describe('single pass solution', () => {
  test('example 1', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;

    const output = single_pass__twoSum(nums, target);

    expect(output).toEqual([0, 1]);
  });
  test('example 2:', () => {
    const nums = [3, 2, 4];
    const target = 6;

    const output = single_pass__twoSum(nums, target);

    expect(output).toEqual([1, 2]);
  });
  test('example 3:', () => {
    const nums = [3, 3];
    const target = 6;

    const output = single_pass__twoSum(nums, target);

    expect(output).toEqual([0, 1]);
  });
  test('example 4:', () => {
    const nums = [1, 3, 4, 2];
    const target = 6;

    const output = single_pass__twoSum(nums, target);

    expect(output).toEqual([2, 3]);
  });
});
