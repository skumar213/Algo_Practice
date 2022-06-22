// https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function(nums) {
  let max = nums[0]
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
      if (nums[i] > (sum + nums[i])) sum = nums[i];
      else sum = (sum + nums[i])

      if (sum > max) max = sum
  }

  return max
}


//Time: O(n) - go through nums once
//Space: O(1) - space is constant

/*
Trick/Pattern

1) You start with the first number as the max and also the current sum total
2) If the current number is larger than the previous sum + the current number then you make the sum the current number, otherwise the sum is the previous sum + the current number
3) then you check if its larger than the max

this works because you need to find the largest contiguous subarray. if the current number is larger than the previous sum + the current number, then you want to make the sum the current number because the largest subarray will start here


*/
