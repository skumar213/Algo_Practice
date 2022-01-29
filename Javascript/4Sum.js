/*
------Prompt------
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.



------Examples------
-Inputs & Outputs
inputs = an array of numbers and a target number
output = an array of arrays that consist of all unique numbers relative to the other arrays that sum up to the target number

-Edge Cases
the amount of numbers in the input array is less than 4 = return [];

-Examples
4Sum([0,1,2,3,4,5], 10) = [[1,2,3,4], [0,1,4,5], [0,2,5,3]]
4Sum([1,0,-1,0,-2,2], 0) = [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
4Sum([2,2,2,2,2], 8) = [[2,2,2,2]]

[ -2, -1, 0, 0, 1, 2 ]
------Solution------
sort the array
break the problem into smaller problems
use a helper function to find if any two equal the sum. then use it to find if any 3 equal to the sum, then use that to see if the current number + any of those iterations equals the target number.


------Time complexity------
O(N ^ 3) - Each nested loop has to go through n iterations

------Space complexity------
O(M) - Will eventually return all the values from the ans object and it will be a length of all the combinations that equal the target.

*/

//------------Solution------------------
//Test all inputs before testing
const fourSum = (arr, target) => {
  arr.sort((a, b) => a - b);
  const ans = {};

  for (let i = 0; i < arr.length - 2; i++) {
    const firstNum = arr[i];

    for (let j = i + 1; j < arr.length - 1; j++) {
      const secondNum = arr[j];
      let p1 = j + 1;
      let p2 = arr.length - 1;

      while (p1 < p2) {
        const currentSum = firstNum + secondNum + arr[p1] + arr[p2];

        if (currentSum === target) {
          if (!ans[`[${firstNum}, ${secondNum}, ${arr[p1]}, ${arr[p2]}]`]) {
            ans[`[${firstNum}, ${secondNum}, ${arr[p1]}, ${arr[p2]}]`] = [
              firstNum,
              secondNum,
              arr[p1],
              arr[p2],
            ];
            p1++;
            p2--;
          } else {
            p1++;
          }
        } else if (currentSum > target) {
          p2--;
        } else if (currentSum < target) {
          p1++;
        }
      }
    }
  }

  return Object.values(ans);
};

//------------Solution Check------------------
console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2, 2, 2, 2, 2], 8)); // [[2,2,2,2]]
