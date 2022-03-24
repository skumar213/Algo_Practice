//Not optimized

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



//---------------------------------------------------------------------------------------------------------
//Optimized

//checks first row if it has any zeros
const firstRowCheck = matrix => {
  for (let firstRow = 0; firstRow < matrix[0].length; firstRow++) {
    if (matrix[0][firstRow] === 0) {
      return true;
    }
  }

  return false;
};

//checks first column if it has any zeros
const firstColCheck = matrix => {
  for (let firstCol = 0; firstCol < matrix.length; firstCol++) {
    if (matrix[firstCol][0] === 0) {
      return true;
    }
  }

  return false;
};

//makes column zero
const makeColZero = (matrix, column) => {
  for (let j = 0; j < matrix.length; j++) {
    matrix[j][column] = 0;
  }
};

//make row 0
const makeRowZero = (matrix, row) => {
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[row][i] = 0;
  }
};

function zeroMatrixOpti(matrix) {
  //checks for 0 in first column and row so we can use it to keep track of later rows and columns
  let firstRowZero = firstRowCheck(matrix);
  let firstColZero = firstColCheck(matrix);

  //check rest of matrix
  for (let row = 1; row < matrix.length; row++) {
    for (let column = 1; column < matrix[0].length; column++) {
      if (matrix[row][column] === 0) {
        matrix[row][0] = 0;
        matrix[0][column] = 0;
      }
    }
  }

  //make columns 0 based on first row
  //have to start at 1, otherwise it'll erase the log in the first row and column
  for (let column = 1; column < matrix[0].length; column++) {
    if (matrix[0][column] === 0) {
      makeColZero(matrix, column);
    }
  }

  //make row 0 based on first column
  //have to start at 1, otherwise it'll erase the log in the first row and column
  for (let row = 1; row < matrix[0].length; row++) {
    if (matrix[row][0] === 0) {
      makeRowZero(matrix, row);
    }
  }

  //check if first row had a zero
  if (firstRowZero) {
    makeRowZero(matrix, 0);
  }

  if (firstColZero) {
    makeColZero(matrix, 0);
  }

  return matrix;
}
//Tests
const matrixOpti = [
  [1, 1, 0],
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];

console.log(zeroMatrixOpti(matrixOpti));

//Time: O(NM) - have to touch each element
//Space: O(1) - use the matrix itself to store where to fill zeros
