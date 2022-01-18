import { unguided__threeSum } from './solution';

describe('unguided attempt', () => {
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
