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




------Time complexity------
O() -

------Space complexity------
O() -
*/

//------------Solution------------------
const wiggleSort = (nums) => {

}







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












