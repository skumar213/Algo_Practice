//https://leetcode.com/problems/power-of-three/submissions/

var isPowerOfThree = function (n) {
  let tmp = 1;

  while (tmp <= n) {
    if (tmp === n) return true;
    tmp = tmp * 3;
  }

  return false;
};

//Time: O(logN) - with a base of 3. Since we're checking all potential answers from 1 to n
//Space: O(1) - no extra space is used

//no loops
var isPowerOfThree = function (n) {
  const base3Log = Math.floor(Math.log(n) / Math.log(3));

  return n === 3 ** base3Log && base3Log !== -Infinity && base3Log !== Infinity;
};

//Time: the time it takes for Math.log to work. This seems to be more intensive than using loops
//Space: O(1) - no extra space is used
