/*
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.
Example 2:

Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.


*/

const search_triplets = function (arr) {
  const triplets = [];

  arr.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  for (let i = 0; i < arr.length; i++) {
    let p1 = i + 1;
    let p2 = arr.length - 1;

    while (p1 < p2) {
      let sum = arr[i] + arr[p1] + arr[p2];

      if (sum === 0) {
        triplets.push([arr[i], arr[p1], arr[p2]]);
        p1++;
        p2--;
      } else if (sum > 0) {
        p2--;
      } else {
        p1++;
      }
    }
  }

  return triplets;
};

//Time: O(n^2) - theres two nested loops
//Space: O(n) - sort takes n space

/*
Explination

Uses two pointer method. Need to sort the array first in order to be able to use this method

1) Outer for loop iterates through the array and keeps track of the current number
2) The inner while loop will use the two pointer method of finding if any pair + the current number is = 0 on the remaining array
    1) The two pointer method is having one at the start of the array and one at the end. And then calculating the sum.
          1) If the sum equal to 0, push to output array. And increment p1 and decrement p2 (since its sorted no other pair of these numbers will work)
          2) If the sum is greater than 0, decrement the second pointer (end)
          3) If the sum is less than 0, increment the first pointer (front)
*/
