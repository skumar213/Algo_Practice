/*
------Prompt------
Given an integer array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

You may assume the input array always has a valid answer.

------Examples------
wiggleSort([3,2,4,1]) = [1,2,3,4]
wiggleSort([1]) = [1]
wiggleSort([]) = [];


------Solution------


------Time complexity------
O() -

------Space complexity------
O() -
*/

//------------Solution------------------





//------------Solution Check------------------
const inputs = [
  [false, "[][(){}"],
  [false, "({)}"],
  [true, "({[]})"],
  [true, "text ( is allowed ){rwwrwrrww [] ()}"],
];

const fn = hasBalancedBrackets;

const solutionCheck = inputs => {
  for (let input of inputs) {
    const answer = input[0];
    const arg1 = input[1];
    const result = fn(arg1);

    console.log("Answer:", answer, "|", "Result:", result);
  }
};

solutionCheck(inputs);
