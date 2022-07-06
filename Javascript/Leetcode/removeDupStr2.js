//https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/

var removeDuplicates = function(s, k) {
  if (s.length < k) return s;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
      if (!stack.length) {
          stack.push([s[i], 1]);
      } else {
          const prevItem = stack[stack.length - 1];

          if (prevItem[0] === s[i]) {
              stack[stack.length - 1][1]++

              if (stack[stack.length - 1][1] === k) {
                  stack.pop();
              }
          } else {
              stack.push([s[i], 1]);
          }
      }
  }

  let ans = '';

  for (let [char, count] of stack) {
      ans += char.repeat(count);
  }

  return ans
};

/*
Time: O(n) - makes one pass through string
Space: O(n) - stack in the worst case will take n space
*/

/*
Trick/Pattern

Use a stack to keep track of letters and their count. If the top of the stack is equal to the current letter, increment its count. If the count now is equal to k, pop it from the stack. You'll be left with all the letters and their counts that remain in the string

*/
