//https://leetcode.com/problems/spiral-matrix/

var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  else if (matrix.length === 1) return matrix[0];
  else {
    const result = [];
    const col = matrix[0].length;
    const row = matrix.length;

    //right
    for (let i = 0; i < col; i++) {
      const num = matrix[0].shift();

      if (num !== undefined) result.push(num);
    }

    //down
    for (let j = 1; j < row - 1; j++) {
      const num = matrix[j].pop();
      if (num !== undefined) result.push(num);
    }

    //left
    for (let k = col - 1; k >= 0; k--) {
      const num = matrix[row - 1].pop();
      if (num !== undefined) result.push(num);
    }

    //up
    for (let l = matrix.length - 2; l > 1; l--) {
      const num = matrix[l].shift();
      if (num !== undefined) result.push(num);
    }

    //removes empty cells
    const newMatrix = [];

    for (let m = 0; m < matrix.length; m++) {
      if (matrix[m].length > 0) newMatrix.push(matrix[m]);
    }

    return result.concat(spiralOrder(newMatrix));
  }
};

//Time: O(m * n) - have to go through all the elements in the matrix
//Space: O(n) - the recursive call stack will be n

/*
1) Uses recursion to find the remaining numbers
2) Base cases are if the matrix is empty return [], and if the length is 1 then just return that inner array
3) Recursive case: get all the elements to the right, down, left, and up (stopping before the second row). While removing the elements from the original matrix
    1) Then remove any empty arrays and then make the recursive call with the new matrix

Each call concats with the result of the recursive call to make the final result
*/
