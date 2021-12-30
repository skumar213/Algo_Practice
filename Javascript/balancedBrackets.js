/*
------Prompt------
Write a function that determines whether an input string has balanced brackets.

You are given an input string consisting of brackets—square [ ], round ( ), and curly { }. The input string can include other text. Write a function that returns either true if the brackets in the input string are balanced or false if they are not. Balanced means that any opening bracket of a particular type must also have a closing bracket of the same type.

An empty input string or a string without brackets can also be considered "balanced".

------Examples------
hasBalancedBrackets('[][(){}'); // false
hasBalancedBrackets('({)}'); // false
hasBalancedBrackets('({[]})'); // true
hasBalancedBrackets('text ( is allowed ){rwwrwrrww [] ()}'); // true

------Solution------
Use a stack to keep track of the most recent bracket. Then loop through the string and if the character is an opening bracket push it to the stack. If its a closed bracket, check if its the respective opposite of the most recent item in the stack, if not return false. Return true if the stack is empty. The stack should be empty if all the brackets were properly closed.

------Time complexity------
O(N) - have to iterate through the entire string in the for loop. Match is also O(N).

------Space complexity------
O(N) - The stack could end up being the same size as the input

*/
//------------Solution------------------
const hasBalancedBrackets = str => {
  if (!str.length || !str.match(/[[\](){}]/g)) {
    return true;
  }

  const stack = [];
  const openBrackets = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  const closedBrackets = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

  for (let char of str) {
    if (openBrackets[char]) {
      stack.push(char);
    } else if (closedBrackets[char]) {
      const mostRecent = stack.pop();
      if (mostRecent !== closedBrackets[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

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
