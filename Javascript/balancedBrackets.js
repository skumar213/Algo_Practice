/*
Prompt:
Write a function that determines whether an input string has balanced brackets.

You are given an input string consisting of brackets—square [ ], round ( ), and curly { }. The input string can include other text. Write a function that returns either true if the brackets in the input string are balanced or false if they are not. Balanced means that any opening bracket of a particular type must also have a closing bracket of the same type.

An empty input string or a string without brackets can also be considered "balanced".

Examples:
hasBalancedBrackets('[][(){}'); // false
hasBalancedBrackets('({)}'); // false
hasBalancedBrackets('({[]})'); // true
hasBalancedBrackets('text ( is allowed ){rwwrwrrww [] ()}'); // true

Solution:


Time complexity:


Space complexity:


*/
//------------Solution------------------
const hasBalancedBrackets = str => {
  if (!str.length || !str.match(/[[\](){}]/g)) {
    return true;
  }

  const stack = [];
  const openBrackets = ["[", "{", "("];
  const closedBrackets = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

  for (let char of str) {
    if (openBrackets.includes(char)) {
      stack.push(char);
    } else if (closedBrackets[char]) {
      const mostRecent = stack.pop();
      if (mostRecent !== closedBrackets[char]) {
        return false
      }
    }
  }

  return stack.length === 0;
};



//------------Solution Check------------------
const inputs = [[false, '[][(){}'],[false, '({)}'], [true, '({[]})'], [true, 'text ( is allowed ){rwwrwrrww [] ()}']]

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
