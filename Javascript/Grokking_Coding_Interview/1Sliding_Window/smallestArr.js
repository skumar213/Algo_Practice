/*
Smallest Subarray With a Greater Sum

Given an array of positive integers and a number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

Example 1:

Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

Example 2:

Input: [2, 1, 5, 2, 8], S=7
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [8].

Example 3:

Input: [3, 4, 1, 1, 6], S=8
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to ‘8’ are [3, 4, 1] or [1, 1, 6].

*/

const smallest_subarray_sum = function (s, arr) {
  let ans = Infinity;
  let sum = 0;
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    while (sum >= s) {
      ans = Math.min(ans, i + 1 - start);
      sum -= arr[start];
      start++;
    }
  }

  if (ans === Infinity) return 0;

  return ans;
};

//Time: O(n) - outer loop runs through all elements and the inner loop at worst will be n, so n + n = n
//Space: O(1) - no extra space is used

/*
Explination

1) This uses the sliding window technique. The sum will keep adding up until it is >= the target.
2) Then the inner while loop will keep going until the sum is no longer >= to the target. While removing the start index
      1) This will also keep updating the ans variable with the shorted subarry. This works because
          if the sum is less than the target then we know no individual number in the currently selected
          subarray is larger than the sum so it must add the next one. And as its reducing the subarray length it
          keeps checking if the current length is less than the answer if the sum is still >= the target



*/
