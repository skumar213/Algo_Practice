//https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function (nums) {
  let currSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(nums[i], currSum + nums[i]);
    maxSum = Math.max(maxSum, currSum);

    console.log(currSum, maxSum);
  }

  return maxSum;
};

//Time: O(n) - go through the array once and Math.max is constant with only two numbers for each iteration
//Space: O(1) - no extra space is used
