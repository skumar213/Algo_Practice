//https://leetcode.com/problems/missing-number/submissions/

var missingNumber = function (nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = nums.reduce((accu, num) => accu + num, 0);

  return expectedSum - actualSum;
};

//Time: O(n) - goes once through nums array
//Space: O(1) - no extra space is used

/*
1) Find the sum of 0->n using the Sum of Consecutive Positive Integers Formula: n(n + 1) / 2
2) Find the sum of all the numbers currently in the nums array
3) The answer is the difference between the expected sum and the actual sum

*/
