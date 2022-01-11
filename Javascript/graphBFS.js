/*
------Prompt------
You are given a two-dimensional array (a matrix) of potentially unequal height and width that contains only values of 0 and 1. Each 0 represents land, and each 1 represents part of a river. A river consists of any number of 1s that are either horizontally or vertically adjacent, but not diagonally adjacent. The number of adjacent 1s forming a river determine it's size.

Write a function that returns an array of the sizes of all rivers represented in the input matrix. The sizes do not need to be in any particular order.

------Examples------
const matrix1 = [
  [1, 0, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 0, 1]
]

riverSizes(matrix1) -> [1,1,5]


const matrix2 = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
]

riverSizes(matrix2) -> [2,1,5,2,2]


------Solution------
1) helper function that determine the length of a river
2) Loop through it and use conditional when a 1 is found to check around it,
    possibly will use helper function here to check

------Time complexity------
O() -

------Space complexity------
O() -
*/

//------------Solution------------------


const counter = (matrix, row, column, history) => {
  let count = 0;

  history.push(`${row}${column}`);

  if ((column + 1) < matrix[row].length && (column - 1) >= 0) {
    //row-forward
    if (matrix[row][column + 1] === 1 && !history.includes(`${row}${column +1}`)) {
      count++;

      count += counter(matrix,row,column + 1, history);
    }

    //row-back
    if (matrix[row][column - 1] === 1 && !history.includes(`${row}${column -1}`)) {
      count++;

      count += counter(matrix,row,column - 1, history);
    }

  }

  if (row + 1 < matrix.length) {
    //column-down
    if (matrix[row + 1][column] === 1) {
      count++;

      count += counter(matrix,row + 1,column, history);
    }
  }

  return count;
};




const riverSizes = matrix => {
  const history = [];
  const result = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      const cell = matrix[row][column];
      let count = 0;


      if (cell === 1 && !history.includes(`${row}${column}`)) {
        count++;

        count += counter(matrix, row, column, history);

        result.push(count);
      }
    }
  }

  return result;
};

//------------Solution Check------------------
const matrix1 = [
  [1, 0, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 0, 1]
]


const matrix2 = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
]



console.log(riverSizes(matrix1).sort((a,b)=>a-b)); //[1,1,5]
console.log(riverSizes(matrix2).sort((a,b)=>a-b)); //[1,2,2,2,5]
