//https://leetcode.com/problems/pascals-triangle/solution/

var generate = function (numRows) {
  if (numRows === 1) return [[1]];
  else if (numRows === 2) return [[1], [1, 1]];
  else {
    let prev = generate(numRows - 1);
    let curr = [1];

    for (let i = 0; i < prev[prev.length - 1].length - 1; i++) {
      const sum = prev[prev.length - 1][i] + prev[prev.length - 1][i + 1];
      curr.push(sum);
    }

    curr.push(1);

    prev.push(curr);

    return prev;
  }
};

//Time: (n * m) - have to iterate through all rows and for each row need to iterate through its individual numbers
//Space: (n) - the call stack will be numRows
