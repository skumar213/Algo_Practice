/*
---Prompt
Given a string that consists of left and right parentheses, '(' and ')', balance the parentheses by inserting parentheses as necessary. Determine the minimum number of characters that must be inserted.

----Example
Input:
S = '()))'

output: 2

*/

/*
1) go through and if its an open paren, add it to the queue
2) if you hit a closed paren, remove the item from the queue and see if it is the opposite paren
    1) if it is you move on
    2) if not you add to the count
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
