// https://leetcode.com/problems/climbing-stairs/solution/
var climbStairs = function (n) {
  if (n === 0 || n === 1) return 1;

  let prev1 = 1;
  let prev2 = 1;

  for (let i = 2; i <= n; i++) {
    const sum = prev1 + prev2;
    prev1 = prev2;
    prev2 = sum;
  }

  return prev2;
};

//Time: O(n) - will iterate from 2 to n
//Space: O(1) - no extra space is used
