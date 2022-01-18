/*
------Prompt------
Given a target sum and an array of positive integers, return true if any combination of numbers in the array can add to the target. Each number in the array may only be used once. Return false if the numbers cannot be used to add to the target sum.

------Examples------
subsetSum(3, [1,2,3,4,5]) - True
subsetSum(6, [1,2,3,4,5]) - True
subsetSum(15, [1,2,3,4,5]) - True
subsetSum(100, [1,2,3,4,5]) - False

------Solution------
Edge cases
1) array is empty - return false
2) target is 0 - return false, assuming only positive integers

-loop through array and see if the first two numbers is the target, if not then the first three. Keep going until sum is greater than target.
-then call the function again but with length n-1 for the array input
-keep going until you either found the match (return true) or array is empty and no match (false)

------Time complexity------
O() -

------Space complexity------
O() -
*/

//------------Solution------------------
const subsetSum = (target, arr) => {
  let sum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.legnth; i++) {
      sum += arr[i];

      if (sum === target) {
        return true;
      } else if (sum > target) {
        break;
      }
    }




  }

  if (arr.length) {
    return subsetSum(target, arr.slice(1))
  } else {
    return false
  }

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
