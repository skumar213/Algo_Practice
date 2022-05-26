/*
Given an array of sorted numbers, separate all duplicates from it in-place. You should not use any extra space; move all duplicates at the end of the array and after moving return the length of the subarray that has no duplicate in it.

Example 1:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
Example 2:

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].

*/


const remove_duplicates = function(arr) {
  let p = 1;
  let currNum = null;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i-1] && currNum === null) {
      p++
    } else if (arr[i] === arr[i-1]) {
      currNum = arr[i]
    } else {
      arr[p] = arr[i]
      p++
      currNum = arr[i];
    }
  }

  return p
};

//Time: O(n) - goes through the array once
//Space: O(1) - no extra space is used


/*
Explination
Uses the two pointer method

1) Iterates through the array searching for a unique number
    1) Once found it will only increment the pointer (the replacement spot) if there is no current duplicate to look out for
    2) If there is a duplicate it will move it to the pointer position, increment the pointer, and change the current duplicate to the current number
2) If no unique number is found it will keep updating the current duplicate number
    1) This works because the array is sorted. It will just keep updating the current duplicate with the same number until a unique number is found


*/
