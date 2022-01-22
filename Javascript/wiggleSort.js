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
Return the array if its length is less than or equal to 1 to cover the edge case. Then make a copy and sort it in ascending order.

The function will differ depending if the input length is even or odd.

If even, It will loop through the copied array and remove the largest number and replace the odd indices in the input array with it. Then on the second loop it will keep removing the largest numbers but putting it on the even indices.

This is progress as follows:
wiggleSort([1,3,2,2,3,1])
First loop: [skip, 3, skip, 3, skip, 2]
Second loop: [2,3,1,3,1,2]


If odd, it will loop through the copied array and remove the smallest number and replace the even indices in the input array with it. Then on the second loop it will keep removing the smallest number but putting on the odd indices.

This will progress as follows:
wiggleSort([1, 1, 2, 1, 2, 2, 1])

First loop [skip, 2, skip, 2, skip, 2, skip]
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
