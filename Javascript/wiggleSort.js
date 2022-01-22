/*
------Prompt------
Given an integer array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

You may assume the input array always has a valid answer.

------Examples------
wiggleSort([1]) = [1]
wiggleSort([]) = [];
wiggleSort([1,3,2,1]) = [1,3,1,2]
wiggleSort([1,3,2,2,3,1]) = [2,3,1,3,1,2]
wiggleSort([1, 1, 2, 1, 2, 2, 1]) = [1,2,1,2,1,2,1]


------Solution------
Return the array if its length is less than or equal to 1. Then make a copy and sorty it in ascending order.
Then loop through the copied array and remove the largest number to be put into the original array (theres variables to know if the input array length is even or odd, this to know when to trigger the second loop). Loop through the array once putting the current largest number in the odd indices. Then on the second loop put the current largest number on the even indices.

This will progress as follows:
wiggleSort([1, 1, 2, 1, 2, 2, 1])

First loop [doesnt change, 2, doesnt change, 2, doesnt change, 2, doesnt change]
Second loop [1, 2, 1, 2, 1, 2, 1]


------Time complexity------
O(N Log N) - We go through the input only once but using the sort method makes it N Log N.

------Space complexity------
O(N) - A copy of the input array is made
*/

//------------Solution------------------
const wiggleSort = nums => {
  if (nums.length <= 1) return nums;

  const numsCopy = nums.map(e => e);
  numsCopy.sort((a, b) => a - b);

  const indexStart = nums.length % 2 === 0 ? 1 : 0;
  const secondLoopIndex = nums.length % 2 === 0 ? -2 : -1;

  for (let i = indexStart; i < nums.length; i += 2) {
    const currentLargestNum =
      indexStart === 1 ? numsCopy.pop() : numsCopy.shift();
    nums[i] = currentLargestNum;

    if (i === nums.length - 1) i = secondLoopIndex;
  }

  return nums;
};

//------------Solution Check------------------

console.log(wiggleSort([1, 1, 2, 1, 2, 2, 1]));
