/*
Prompt:
Given an array of distinct integers and an integer representing a target sum, write a function that returns an array of all triplets in the input array that sum to the target sum.

Examples:
arrayThreeSum([12, 3, 1, 2, -6, 5, -8, 6], 0)   //should return [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
arrayThreeSum([5, 6 , 1, -9 , 7, 3 , 2], 35)    //should return []
arrayThreeSum([1, 15, -5, 12 , -3, 6 , 2], 10)  //should return [[ -3, 1, 12 ]]

Solution:
First step is to sort the array so we can use pointers to solve it. Then iterate through the array while keeping a static number from the array and then seeing if a pair + static number is equal to the target in a nested while loop. If found push the combo of numbers up to the result array. Return the result array

Time complexity:
O(N^2) - you have to iterate through the array and then again for each static number

Space complexity:
O(N) - the result array at worst case could include all the numbers of the input array

*/
//------------Solution------------------

const arrayThreeSum = (arr, target) => {
  arr.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let staticNum = arr[i];
    let p1 = i + 1;
    let p2 = arr.length - 1;

    while (p1 < p2) {
      const sum = staticNum + arr[p1] + arr[p2];

      if (sum === target) {
        result.push([staticNum, arr[p1], arr[p2]]);
        p2--;
        p1++;
      } else if (sum > target) {
        p2--;
      } else if (sum < target) {
        p1++;
      }
    }
  }

  return result;
};

//------------Solution Check------------------
const inputs = [
  [
    [
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 1, 5],
    ],
    [12, 3, 1, 2, -6, 5, -8, 6],
    0,
  ],
  [[], [5, 6, 1, -9, 7, 3, 2], 35],
  [[[-3, 1, 12]], [1, 15, -5, 12, -3, 6, 2], 10],
];

const fn = arrayThreeSum;

const solutionCheck = inputs => {
  for (let input of inputs) {
    const answer = input[0];
    const arg1 = input[1];
    const arg2 = input[2];
    const result = fn(arg1, arg2);

    console.log("Answer:", answer, "|", "Result:", result);
  }
};

solutionCheck(inputs);
