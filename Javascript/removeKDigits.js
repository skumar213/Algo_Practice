/*
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
Need to keep track how far away from the end of the string you are. Need to stop switching numbers when the end is getting to short
convert the string to an array
loop through the input string for the length of k
  checking if the current number is less than the next
    if it is greater or equal you remove it from (splice)
    if less you move to the next digit (don't iterate the for loop, use a while loop that keeps going until it is greater)
remove any leading zeros and then join array


------Time complexity------
O() -

------Space complexity------
O() -
*/

//------------Solution------------------
//Test all inputs before testing
const removeKdigits = (num, k) => {
  




}



//------------Solution Check------------------
const inputs = [
  [false, "[][(){}"],
  [false, "({)}"],
  [true, "({[]})"],
  [true, "text ( is allowed ){rwwrwrrww [] ()}"],
];

const fn = hasBalancedBrackets;

const solutionCheck = inputs => {
  for (let input of inputs) {
    const answer = input[0];
    const arg1 = input[1];
    const result = fn(arg1);

    console.log("Answer:", answer, "|", "Result:", result);
  }
};

solutionCheck(inputs);
