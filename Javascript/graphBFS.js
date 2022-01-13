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
Use two functions to help break the logic into smaller pieces.

The function riverSizes is the main function that will iterate through all the items in the matrix, with a nested for loop. In the loop, once a number one is found and this cell hasn't been visited before, it will increment the count and then check the cells around with a helper function. The result of the helper function will be added to the total count, which gets pushed into an array.

The function checkAround will check the spaces forward, back, and down from the original spot to see if a 1 is there. If it finds a 1, it will recursively call itself with the next spot over, in its respective direction, as its inputs. The result of all the recursive calls will be added to the total count.

Will also use a history variable (an object), that will be passed to each new function call to keep track of which cells we've been to.

------Time complexity------
O(N * M) - We have to visit each cell in the matrix. The outer array has length N and then inner array has length M.

------Space complexity------
O(N * M) - We have to keep track of all the cells that were visited in the history object and the call stack from calling the function recursively will also take up space
*/

//------------Solution------------------

const checkAround = (matrix, row, column, history) => {
  let count = 0;


  history[`${row}${column}`] = true;

  if (column + 1 < matrix[row].length && column - 1 >= 0) {
    //row-forward
    if (
      matrix[row][column + 1] === 1 &&
      !history[`${row}${column + 1}`]
    ) {
      count++;

      count += checkAround(matrix, row, column + 1, history);
    }

    //row-back
    if (
      matrix[row][column - 1] === 1 &&
      !history[`${row}${column - 1}`]
    ) {
      count++;

      count += checkAround(matrix, row, column - 1, history);
    }
  }

  if (row + 1 < matrix.length) {
    //column-down
    if (matrix[row + 1][column] === 1) {
      count++;

      count += checkAround(matrix, row + 1, column, history);
    }
  }

  return count;
};

const riverSizes = matrix => {
  const history = {};
  const result = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      const cell = matrix[row][column];
      let count = 0;

      if (cell === 1 && !history[`${row}${column}`]) {
        count++;

        count += checkAround(matrix, row, column, history);

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
  [1, 0, 0, 1],
];

const matrix2 = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];

console.log(riverSizes(matrix1).sort((a, b) => a - b)); //[1,1,5]
console.log(riverSizes(matrix2).sort((a, b) => a - b)); //[1,2,2,2,5]
