//https://leetcode.com/problems/excel-sheet-column-number/submissions/

var titleToNumber = function (columnTitle) {
  let remainingLength = columnTitle.length - 1;
  let ans = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    const charCovert = columnTitle.charCodeAt(i) - 64;

    const count = 26 ** remainingLength * charCovert;
    remainingLength--;

    ans += count;
  }

  return ans;
};

//Time: O(n) - goes through string length once
//Space: O(1) - constant space is used throughout

/*
Explinaiton

Starting from the left you find the current letters count and then add the letters to its right
You find the current letter by finding how many times the alphabet repeats itself. Then at the
current alphabet you find how far into it is

Current letter = (26 ^ (length of current lerter to end - 1)) * (current letter number between 1-26)
1) A = (26 ^ 0 * 1) = 1
2) ZY = (26 ^ 1  * 26) + (26 ^ 0 * 25) = 701

*/
