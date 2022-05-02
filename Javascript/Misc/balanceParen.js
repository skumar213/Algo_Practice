/*
---Prompt
Given a string that consists of left and right parentheses, '(' and ')', balance the parentheses by inserting parentheses as necessary. Determine the minimum number of characters that must be inserted.

----Example
Input:
S = '()))'

output: 2

*/

function minParen(str) {
  let open = 0;
  let closed = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") open++;
    else if (open) open--;
    else closed++;
  }

  return open + closed;
}

const str = ")))";

console.log(minParen(str));


//Time: O(n) - have to go through the string once
//Space: O(1) - no extra space is used
