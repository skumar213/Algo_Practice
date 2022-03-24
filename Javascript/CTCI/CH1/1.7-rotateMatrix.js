//Not in-place
function rotateMatrix1(arr) {
  const ans = [];
  let ansIndex = 0;
  arr.forEach(el => ans.push(Array(arr.length)));

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
      ans[i][ansIndex] = arr[j][i];
      ansIndex++;
    }
    ansIndex = 0;
  }

  return ans;
}

//Time: O(n^2) - have to iterate through all elements;
//Space: O(1) - output array doesn't count towards space complexity

//----------------
//In-place

function rotateMatrix2(matrix) {
  if (matrix.length === 0 || matrix.length !== matrix[0].length) return 0;

  const length = matrix.length;

  for (let row = 0; row < Math.floor(length / 2); row++) {
    const last = length - 1 - row;

    for (let column = row; column < last; column++) {
      const offSet = column - row;

      const top = matrix[row][column];

      //left to top
      //top                 //left
      matrix[row][column] = matrix[last - offSet][row];

      //bottom to left
      //left                      //bottom
      matrix[last - offSet][row] = matrix[last][last - offSet];

      //right to bottom
      //bottom                        //right
      matrix[last][last - offSet] = matrix[column][last];

      //top to right
      //right               //top
      matrix[column][last] = top;
    }
  }

  return matrix;
}

//Time: O(n^2) - have to touch all elements;
//Space: O(1) - replaces everything in place

//Tests
console.log(
  rotateMatrix1([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);
console.log(
  rotateMatrix2([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);

/*
-------Notes for in-place-------

Each element is represented as [row][column]

1) For each row you iterate length - 1 and then subtract 1 from each subsequent later. This is because the elements after it have already been rotated
2) Offset keeps the square shape (since its NxN) for the rotation. It will increment with each element in a row (column)
3) the column value starts at the row value, this is becuase you need to account for elements that have already been rotated
4) Below is a breakdown of each position and how its calculated
    1) top = its the current row and column. Row will be iterating already and column will start at column and then iterate and stop at the correct spot
    2) left = the pattern here is that the row index will be the stopping point for the inner for loop (per ponint 1) with an offset to maintain the square shape and the column index will match the current row index
    3) bottom = the pattern here is that the column index will match the stopping point and the row index will match the stopping point with an offset to maintain the square shape
    4) right = the row index is the column and the row index is the stopping point of the inner loop
5) Outer for loop only has to iterate n/2 since its making 4 moves with each rotation. this is to avoid reiteration
*/
