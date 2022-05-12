//https://leetcode.com/problems/sqrtx/

var mySqrt = function (x) {
  for (let i = 0; i <= x; i++) {
    if (i * i === x) return i;
    else if (i * i > x) return i - 1;
  }
};

//Time: O(n) - from 0 to x
//Space: O(1) - no space is used
