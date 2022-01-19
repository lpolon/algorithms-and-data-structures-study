import { unguided__threeSum } from './unguided-solution';
import { aarons__threeSum } from './solution';

xdescribe('unguided attempt', () => {
  test('should return expected output', () => {
    const input = [-1, 0, 1, 2, -1, -4];
    const expectedOutput = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];
    const output = unguided__threeSum(input);
    expect(output).toEqual(expectedOutput);
  });
  test('empty array should return no valid solution', () => {
    const input: number[] = [];
    const expectedOutput: number[][] = [];

    const output = unguided__threeSum(input);
    expect(output).toEqual(expectedOutput);
  });
  test('zero as only array element should return no valid solution', () => {
    const input = [0];
    const expectedOutput: number[][] = [];

    const output = unguided__threeSum(input);
    expect(output).toEqual(expectedOutput);
  });
});

describe("aaron's solution", () => {
  test('empty array should return no valid solution', () => {
    const input: number[] = [];
    const expectedOutput: number[][] = [];

    const output = aarons__threeSum(input);
    expect(output).toEqual(expectedOutput);
  });
  test('zero as only array element should return no valid solution', () => {
    const input = [0];
    const expectedOutput: number[][] = [];

    const output = aarons__threeSum(input);
    expect(output).toEqual(expectedOutput);
  });
  test('should return expected output', () => {
    const input = [-1, 0, 1, 2, -1, -4];
    const expectedOutput = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];
    const output = aarons__threeSum(input);
    expect(output).toEqual(expectedOutput);
  });
  test('should not duplicate output in only zero array', () => {
    const input = [0, 0, 0, 0];
    const expectedOutput = [[0, 0, 0]];
    const output = aarons__threeSum(input);
    expect(output).toEqual(expectedOutput);
  });
  test('should return expected output', () => {
    const input = [1, -1, -1, 0];
    const expectedOutput = [[-1, 0, 1]];
    const output = aarons__threeSum(input);
    expect(output).toEqual(expectedOutput);
  });
});
