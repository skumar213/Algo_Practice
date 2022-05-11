// https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/



var removeDuplicates = function(nums) {
  let replaceIdx = 1;
  let prevNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
      if (nums[i] > prevNum) {
          nums[replaceIdx] = nums[i];
          replaceIdx++
          prevNum = nums[i];
      }
  }


  return replaceIdx
};


//Time: O(n) - have to go through nums once
//Space: O(1) - no extra space is used
