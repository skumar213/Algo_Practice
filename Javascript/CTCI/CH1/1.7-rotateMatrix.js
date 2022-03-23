function rotateMatrix(arr) {
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

//Tests
console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  rotateMatrix([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);
console.log(
  rotateMatrix([
    [1, 2],
    [3, 4],
  ])
);

//Time: O(n^2) - have to iterate through all elements;
//Space: O(1) - output array doesn't count towards space complexity
