//https://leetcode.com/problems/majority-element/

var majorityElement = function(nums) {
  let count = 0;
  let ans = null;


  for (let num of nums) {
      if (count === 0) {
        ans = num
      }

      count += (ans === num) ? 1 : -1
  }

  return ans
};

//Time: O(n) - have to iterate through nums once
//Space: O(1) - no extra space is used


/*
Explination

Since there will only be two numbers in the array, you increment count when you find an instance of the current number
and decrement it otherwise. If the count is 0, then that means all previous numbers cancel out and the current number now becomes your new number.
Ans will only change when the numbers before it cancel out, so you will go all the way through the array once and end up the correct answer in the end

*/
