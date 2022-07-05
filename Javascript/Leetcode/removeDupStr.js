//https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

var removeDuplicates = function(s) {
  const stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
      const stackTop = stack[stack.length - 1];

      if (s[i] === stackTop) stack.pop();
      else stack.push(s[i]);
  }


  return stack.join("")
};


/*
Time: O(n) - makes one pass through string
Space: O(n) - stack in the worst case can hold all the letters in the string
*/

/*
Trick/Pattern

Use the stack to keep track of each letter and if the current letter is equal to the top of the stack then remove that item from the stack and keep going. This way only the letters that don't have duplicates will be in the stack
*/
