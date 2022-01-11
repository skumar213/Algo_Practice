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
const rowHelper = (matrix, row, column, history) => {
  let count = 0;

  //row-forward
  if (matrix[row][column+1] === 1) {
    count++;

    count += rowHelper(matrix[row][column+1])
  }

  //row-back
  if (matrix[row][column+1] === 1) {
    count++;

    count += rowHelper(matrix[row][column+1])
  }

  //column-down
  if (matrix[row+1][column] === 1) {
    count++;

    count += rowHelper(matrix[row+1][column])
  }

  return count;
}





const riverSizes = (matrix, row=0, column=0) => {
  const result = [];
  const history = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; j < matrix[row].length; column++) {
      const cell = matrix[row][column];
      let count = 0;

      if (cell === 1) {
        count++;

        //check rest of row-forward
        for (let s = column + 1; s < matrix[row].length; s++) {
          if (matrix[row][s] === 1) {
            count++
          } else {
            break
          }
        }

        //check rest of row-back
        for (let s = column - 1; s >= 0; s--) {
          if (matrix[row][s] === 1) {
            count++
          } else {
            break
          }
        }

        //check rest of column-down
        for (let k = row + 1; s < matrix.length; k++) {
          if (matrix[k][column] === 1) {
            count++
          } else {
            break
          }
        }


      }



    }
  }
}




//------------Solution Check------------------
const inputs = [
  [false, "[][(){}"],
  [false, "({)}"],
  [true, "({[]})"],
  [true, "text ( is allowed ){rwwrwrrww [] ()}"],
];

const fn = hasBalancedBrackets;

const solutionCheck = inputs => {
  for (let input of inputs) {
    const answer = input[0];
    const arg1 = input[1];
    const result = fn(arg1);

    console.log("Answer:", answer, "|", "Result:", result);
  }
};

solutionCheck(inputs);
