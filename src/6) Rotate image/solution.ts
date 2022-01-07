// unguided attempt:
export const transpose = <Type>(matrix: Type[][]): Type[][] => {
  return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
};

/*
no in place mutation
*/
export const rotateImage = (matrix: number[][]): number[][] => {
  const rows = matrix;
  const columns = transpose(rows);
  const ninetyDegRotation = columns.map((column) => column.reverse());

  return ninetyDegRotation;
};

export const mutation__rotateImage = (matrix: number[][]): void => {
  const columns = transpose(matrix);

  const rowsLength = matrix[0].length;
  for (let i = 0; i < matrix.length; i += 1) {
    let j1, j2: number;
    for (j1 = 0, j2 = rowsLength - 1; j1 < rowsLength; j1 += 1, j2 -= 1) {
      matrix[i][j1] = columns[i][j2];
    }
  }
};
