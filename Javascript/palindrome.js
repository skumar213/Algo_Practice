/*
Prompt:
Given a string str, create a function that returns a boolean, corresponding to whether that string is a palindrome (spelled the same backwards and forwards). Our palindrome check should be case-insensitive.

Examples:
isPal('car') => false
isPal('racecar') => true
isPal('RaCecAr') => true
isPal('!? 100 ABCcba 001 ?!') => true
isPal('') => true

Solution:
Check the first and last letter of the string and compare them. If at any point they don't match return false. Return true if it makes it all the way through.

Time complexity: O(n) - we have to atleast loop through n/2
Space complexity: O(1) - we create a constant number of new variables for each iteration

*/

const isPal = str => {
  str = str.toLowerCase();

  while (str.length > 1) {
    const firstLetter = str[0];
    const lastLetter = str[str.length - 1];

    if (firstLetter === lastLetter) {
      str = str.slice(1, str.length - 1);
    } else {
      return false;
    }
  }

  return true;
};

//------------Solution Check------------------
const inputs = [
  ["car", "false"],
  ["racecar", "true"],
  ["RaCecAr", "true"],
  ["!? 100 ABCcba 001 ?!", "true"],
  ["", "true"],
];

const solutionCheck = inputs => {
  for (let input of inputs) {
    console.log("Correct Answer:", input[1], "Result:", isPal(input[0]));
  }
};

solutionCheck(inputs);
