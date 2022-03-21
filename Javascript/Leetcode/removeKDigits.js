/*
https://leetcode.com/problems/remove-k-digits/

------Prompt------
Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

------Examples------
-Inputs & Outputs
inputs = a string that represents a postitive number. an integer that represents how many digits to remove
output = an integer thats the smallest possible after removing k digits


-Edge Cases
String is empty = return 0
num is zero = return string
num is length of string = return 0

-Examples
removeKdigits('12345', 4) = 1
removeKdigits('12345', 2) = 123
removeKdigits('53421', 4) = 1
removeKdigits('10200, 1) = 200


------Solution------
Use a stack to keep track of the most recent item
Then loop through the string
  if the current number is less than the one in the stack (Use a while loop to keep doing this until false, or you've already removed the required amount)
    remove the item from the stack and decrement the amount needed to remove
  push the current number to the stack
The loop could end without the required amount being removed. If thats the case shorten the stack by that amount from the end.
Then return the stack as the final number

------Time complexity------
O(N) - Even though there's a nested while loop it won't run more than N. Worst case the for loop will make it to the last number and then the while loop will have to run through the length of the string again to update the stack = 2N.

------Space complexity------
O(N) - Have a stack keeping track of the numbers and in worst case needs to hold all the numbers.
*/

//------------Solution------------------

const removeKdigits = (num, k) => {
  if (!num || num.length === k) return "0";
  if (k === 0) return num;

  const stack = [];
  for (let i = 0; i < num.length; i++) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }

  if (k) {
    stack.splice(-k);
  }

  while (stack[0] === "0") {
    stack.splice(0, 1);
  }

  const finalNum = stack.join("");

  return `${finalNum.length === 0 ? "0" : finalNum}`;
};

//------------Solution Check------------------
// console.log(removeKdigits("111111110", 3)); //111110
// console.log(removeKdigits("1173", 2)); //11
console.log(removeKdigits("1432219", 3)); //1219
// console.log(removeKdigits('10200', 1)) //200
// console.log(removeKdigits("1234567890", 9)); //0
// console.log(removeKdigits('4321', 2)) //21
// console.log(removeKdigits('99321', 3)) //21
// console.log(removeKdigits('10001', 4)) // 0
