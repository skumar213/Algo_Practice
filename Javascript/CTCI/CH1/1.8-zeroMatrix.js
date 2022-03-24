function fillZero(matrix, row, column) {
  //fill row
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[row][i] = 0;
  }

  //fill column
  for (let j = 0; j < matrix.length; j++) {
    matrix[j][column] = 0;
  }
}

function zeroMatrix(matrix) {
  const rowIdx = Array(matrix.length).fill(false);
  const columnIdx = Array(matrix[0].length).fill(false);

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[0].length; column++) {
      if (matrix[row][column] === 0 && !rowIdx[row] && !columnIdx[column]) {
        rowIdx[row] = true;
        columnIdx[column] = true;
        fillZero(matrix, row, column);
      }
    }
  }

  return matrix;
}
//Tests
const matrix = [
  [1, 1, 0],
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];
console.log(zeroMatrix(matrix));

//Time: O(NM) - have to touch each element
//Space: O(N + M) - make an array copy of the rows length and columns length
