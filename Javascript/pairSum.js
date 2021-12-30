/*
Prompt:
Given an array arr consisting of N integers, sorted in ascending order (least to greatest), and a separate number (a sum), determine if any 2 numbers in the array add up to the sum. Return true if any 2 different numbers within the array add up to sum. Return false if no 2 numbers in the array add up to sum.

Examples:
pairSum([1, 1, 2, 3, 4, 5], 7) -> true (either 2+5 or 3+4)
pairSum([1, 2, 3, 4, 5], 10) -> false
pairSum([0, 2, 3, 6, 9, 10], 10) -> true (0 + 10)
pairSum([1, 2, 3, 7, 8], 7) -> false
pairSum([-2, 0, 4, 6, 10], 8) -> true (-2 + 10)
pairSum([1, 2, 3, 4, 5], 2) -> false
pairSum([1], 2) -> false
pairSum([2], 2) -> false
pairSum([], 1) -> false

Solution:
Since the array is already sorted, we can use pointers to keep track of the first and last item in the array and increment/decrement a pointer depending on the sum of the pointers vs the target number. If its larger, decrement the last item, otherwise increment the first pointer. If at any point it is equal to the targer, return true. Otherwise return false if it makes it all the way through.

Time complexity:

Space complexity:

*/

//------------Solution------------------

const pairSum = (arr, target) => {

}



//------------Solution Check------------------
const inputs = [
  ["true", [1, 1, 2, 3, 4, 5], 7],
  ["false", [1, 2, 3, 4, 5], 10],
  ["true", [0, 2, 3, 6, 9, 10], 10],
  ["false", [1, 2, 3, 7, 8], 7],
  ["true", [-2, 0, 4, 6, 10], 8],
  ["false", [1, 2, 3, 4, 5], 2],
  ["false", [1], 2],
  ["false", [2], 2],
  ["false", [], 1],
];

const fn = pairSum;

const solutionCheck = inputs => {
  for (let input of inputs) {
    const answer = input[0];
    const arg1 = input[1];
    const arg2 = input[2];

    console.log("Answer:", answer, "Result:", fn(arg1, arg2));
  }
};

solutionCheck(inputs);
