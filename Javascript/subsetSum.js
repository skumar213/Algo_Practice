/*
------Prompt------
Given a target sum and an array of positive integers, return true if any combination of numbers in the array can add to the target. Each number in the array may only be used once. Return false if the numbers cannot be used to add to the target sum.

------Examples------
subsetSum(2, [1, 10, 5, 3]); // false
subsetSum(10, [1, 10, 5, 3]); // true

subsetSum(9, [1, 10, 5, 3]); // true

subsetSum(19, [1, 10, 5, 3]); // true
subsetSum(17, [1, 10, 5, 3]); // false



------Solution------
Edge cases
1) array is empty - return false
2) target is 0 - return false, assuming only positive integers
3) if array i [1] and target 1 - true

-loop through array and see if the first element and any other number equals the target. if not add the first two element together and see if any three equals the target. if this sum is greater than the target, skip it. If still no match, keep adding the on going sum with the next element and seeing if that subset equals the target.
-if nothing matches, then change the array to n-1 and repeat the process until array is empty

------Time complexity------
O() -

------Space complexity------
O() -
*/

//------------Solution------------------
const subsetSum = (target, arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    for (let j = i + 1; arr.length; j++) {

    }
  }



};








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
