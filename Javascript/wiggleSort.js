/*
------Prompt------
Given an integer array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

You may assume the input array always has a valid answer.

------Examples------
wiggleSort([1]) = [1]
wiggleSort([]) = [];
wiggleSort([1,3,2,1]) = [1,3,1,2]
wiggleSort([1,3,2,2,3,1]) = [2,3,1,3,1,2]

[1,1,2,2,3,3]

[2,3,1,3,1,2]


------Solution------
Each 3 combo is a subset and the start and end of each combo is part of another subset (except for first and last numbers)

Make an array with the same length as the input with values of null
Sort input array
Use a while loop (array includes null), then pop() (will be the current largest) and insert it into odd indexes until you hit the end, then it will loop again putting the current largest on even inputs. So it will take two loops

[1,1,2,1,2,2,1]

[1,1,1,1,2,2,2]

[1,0,1,0,1,0,1]

------Time complexity------
O() -

------Space complexity------
O() -
*/

//------------Solution------------------
const wiggleSort1 = nums => {
  if (nums.length <= 1) return nums;

  const numsCopy = nums.map(e => e);
  numsCopy.sort((a, b) => a - b);

  const indexStart = nums.length % 2 === 0 ? 1 : 0;
  const secondLoopIndex = nums.length % 2 === 0 ? -2 : -1;

  for (let i = indexStart; i < nums.length; i += 2) {
    const currentLargestNum = indexStart === 1 ? numsCopy.pop() : numsCopy.shift();
    nums[i] = currentLargestNum;

    if (i === nums.length - 1) i = secondLoopIndex;
  }

  return nums;
};



const wiggleSort = nums => {
  if (nums.length <= 1) return nums;

  const numsCopy = nums.map(e => e);
  numsCopy.sort((a, b) => a - b);

  const indexStart = nums.length % 2 === 0 ? 1 : 0;
  const secondLoopIndex = nums.length % 2 === 0 ? -2 : -1;

  for (let i = indexStart; i < nums.length; i += 2) {
    const currentLargestNum = indexStart === 1 ? numsCopy.pop() : numsCopy.shift();
    nums[i] = currentLargestNum;

    if (i === nums.length - 1) i = secondLoopIndex;
  }

  return nums;
};

//

//------------Solution Check------------------

console.log(wiggleSort([1, 1, 2, 1, 2, 2, 1]));
