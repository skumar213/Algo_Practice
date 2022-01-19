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

//unoptimized solution
Loop through the array and add the current number to the sum. If the sum is the target, return true. Else if the sum is greater than the target continue the loop with the next iteration. Otherwise, loop through the rest of the array adding the each number to the current sum individually and checking if it matches the target. If no match, add the next number to the sum and repeat the process. This will check for each combination of the first number in the array with all the other numbers. If there is no match, the function will be call again but without the first element of the array. If there is no match and the array length is 0, it will return false.

//optimized solution
Keep track of all the sums in a new array. Loop through the input array and for each iteration make a copy of the current sums array and loop through that. In that loop, it will check if the currently selected number plus each item in the sums array copy is equal to the target. If its not it will push the current sum to the array. This will keep track of all the combinations a single number can have with another.

For example: optiSubsetSum(9, [1, 10, 5, 3])
The sums array will grow as follows keeping track of all the previous sums.

1) [0] - initial state
2) [0,1] - current number: 1
3) [0,1,10,11] - current number: 10
4) [0,1,10,11,5, 6, 15, 16] - current number: 5
  -This is checking the following: 0+5=5, 1+5=6, 10+5=15, 1+5+10=16
5) [0,1,10,11,5, 6, 15, 16, 3, 4, 13, 14, 8, 9]  - current number: 3


------Time complexity------
O(2 ^ N) -

------Space complexity------
O(2 ^ N) -
*/

//------------Solution------------------

//unoptimized solution
const subsetSum = (target, arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === target) return true;
    else if (sum > target) {
      sum -= arr[i];
      continue;
    }

    for (let j = i + 1; j < arr.length; j++) {
      const tmpSum = sum + arr[j];

      if (tmpSum === target) return true;
    }
  }

  if (arr.length) return subsetSum(target, arr.slice(1));

  return false;
};


//optimized solution
const optiSubsetSum = (target, arr) => {
  const sums = [0];

  for (let i = 0; i < arr.length; i++) {
    const sumsCopy = [...sums];

    for (let j = 0; j < sumsCopy.length; j++) {
      const tmpSum = sumsCopy[j] + arr[i];

      if (tmpSum === target) return true;

      sums.push(tmpSum);


    }
  }

  return false;
}

//------------Solution Check------------------

console.log('unoptimized')
console.log(subsetSum(2, [1, 10, 5, 3])); // false
console.log(subsetSum(10, [1, 10, 5, 3])); // true
console.log(subsetSum(9, [1, 10, 5, 3])); // true
console.log(subsetSum(8, [1, 10, 5, 3])); // true
console.log(subsetSum(19, [1, 10, 5, 3])); // true
console.log(subsetSum(17, [1, 10, 5, 3])); // false

console.log('optimized')
console.log(optiSubsetSum(2, [1, 10, 5, 3])); // false
console.log(optiSubsetSum(10, [1, 10, 5, 3])); // true
console.log(optiSubsetSum(9, [1, 10, 5, 3])); // true
console.log(optiSubsetSum(8, [1, 10, 5, 3])); // true
console.log(optiSubsetSum(19, [1, 10, 5, 3])); // true
console.log(optiSubsetSum(17, [1, 10, 5, 3])); // false
