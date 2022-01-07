import { mutation__rotateImage, rotateImage } from './solution';

describe('no mutation', () => {
  test('should rotate matriz 90 degrees clockwise', () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const expectedOutput = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];

    const output = rotateImage(input);
    expect(output).toEqual(expectedOutput);
  });
});

describe('with in place mutation', () => {
  test('should rotate matriz 90 degrees clockwise', () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const expectedOutput = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];

    mutation__rotateImage(input);
    expect(input).toEqual(expectedOutput);
  });
});
