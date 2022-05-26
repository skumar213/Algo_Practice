//https://leetcode.com/problems/generate-parentheses/

var generateParenthesis = function (n) {
  if (n === 1) return ["()"];
  else {
    const prevAns = generateParenthesis(n - 1);
    const newAns = [];

    for (let i = 0; i < prevAns.length; i++) {
      for (let j = 0; j < prevAns[i].length; j++) {
        if (prevAns[i][j] === ")") break;
        if (prevAns[i][j] === "(" && j == 0) {
          newAns.push(`()${prevAns[i]}`);
          newAns.push(
            `${prevAns[i].slice(0, j + 1)}()${prevAns[i].slice(j + 1)}`
          );
        } else if (prevAns[i][j] === "(") {
          newAns.push(
            `${prevAns[i].slice(0, j + 1)}()${prevAns[i].slice(j + 1)}`
          );
        }
      }
    }

    return newAns;
  }
};

//Time: O(n * n!) - this is an estimate. The recursive call will go n deep and then for each step you need to find all the permutations for the previous answers open brackets
//since it's only check the first continous sequence of open brackets this maybe not be n! at each step
//Space: O(n) - the recursive stack will go n deep

/*
Explination

The pattern here is similar to generating all permutations. For all permutations of a word you put the current letter before and after each letter for n - 1 variations.
For this you put () before and after each open bracket


*/
