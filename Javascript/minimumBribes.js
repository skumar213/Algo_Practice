/*
------Prompt------
It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from 1 to n. Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

------Examples------
-Inputs & Outputs
input = an array of numbers that represent a position in line. Each number is where the person was originally before they moved. Starting with 1.
output = a number that represent the total number of bribes made. A person can move as far back as they want but they can only move forward by two spaces

-Edge Cases
array is empty = return 0

-Examples
[1,2,3,4,5]

minBribes([1,2,4,3,5]) = 1
minBribes([5,4,3,2,1]) = "Too chaotic"
minBribes([2,1,5,4,3]) = 3
minBribes([2,1,5,3,4]) = 4
minBribes([2,3,4,5,1]) = 4


------Solution------
if array length is less than 2 return 0

something needs to happen as I progress through the array since you can go as far back as you want but you can't move more than 2 forward

loop through the array - 1 and check:
  how far the current number from where it's supposed to be



------Time complexity------
O() -

------Space complexity------
O() -
*/

//------------Solution------------------
//Test all inputs before testing




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
