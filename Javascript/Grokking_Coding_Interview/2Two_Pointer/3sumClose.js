/*
Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

Example 1:

Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
Example 2:

Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
Example 3:

Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target.
*/

const triplet_sum_close_to_target = function (arr, targetSum) {
  let closest = arr[0] + arr[1] + arr[2];

  arr.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  for (let i = 0; i < arr.length; i++) {
    let p1 = i + 1;
    let p2 = arr.length - 1;

    while (p1 < p2) {
      const sum = arr[i] + arr[p1] + arr[p2];

      if (sum === targetSum) {
        return targetSum;
      } else {
        if (Math.abs(targetSum - sum) < Math.abs(targetSum - closest)) {
          closest = sum;
        }

        if (sum > targetSum) {
          p2--;
        } else {
          p1++;
        }
      }
    }
  }

  return closest;
};

//Time: O(n^2) - has two nested loop both going the length of n
//SPace: O(n) - n is required for sorting

/*
Uses the two pointer method

Is based off of the 3sum problem where you need to find 3 elements in an array equal to the sum
This does the same thing except if the sum is not equal to the target it will check if its difference from the
target is less than the current closest difference to the target and will update the closest varialbe accordingly

*/
