/*
---Prompt
Given a string, reduce it in such a way that all of its substrings are distinct. To do so, you may delete any characters at any index. What is the minimum number of deletions needed?

----Example
Input
s = 'abcab'

output: 2   # Delete a and b
*/

function strReduce(str) {
  return str.length - Array.from(new Set(str)).length;
}

const str = "abcab";

console.log(strReduce(str));



//Time: O(n) - a second array needs to be created that takes time n
//Space: O(n) - space of second array
