/*
---Prompt
Given nums and segment x. Find for each segment of size x the minimum number and find the maximum of all these segments.

----Example
Eg : [ 8,2,4,6 ] , x = 2
output = max( [ 2 , 2 , 4 ] ) = 4
*/

//Optimized
function diskSpaceAnalysis(nums, x) {
  let currMin = Infinity;
  let max = -Infinity;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < currMin) currMin = nums[i];
    count++;

    if (count === x) {
      if (currMin > max) max = currMin;
      count = 0;
      currMin = Infinity;
      i--;
    }
  }

  return max;
}

const nums = [2, 5, 4, 6, 8];
const x = 3;

console.log(diskSpaceAnalysis(nums, x)); // 4

//Time: O(n) - have to go through nums once
//Space: O(1) - no extra space is used
