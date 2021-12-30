/*
Prompt:
You are attempting to find the index of the first appearance of one string (the needle) inside of another (the haystack). Return -1 if it is not found. Don't use any built in methods that will do this for you.

Examples:
indexOf('or', 'hello world'); // should return 7
indexOf('hello world', 'or'); // should return -1
indexOf('howdy', 'hello world'); // should return -1
indexOf('oox', 'ooboxoooxo'); // should return 6

Solution:
Iterate through the haystack while comparing the first letter of the needle. If found, slice the length of the needle and compare. Return the index if true and continue if not. Return -1 if you make it the whole way through.

Time complexity:


Space complexity:

*/

const findIndex = (needle, haystack) => {
  for (let i = 0; i < haystack.length; i++) {
    if (needle[0] === haystack[i]) {
      const haystackWord = haystack.slice(i, i + needle.length);

      if (haystackWord === needle) {
        return i;
      }
    }
  }

  return -1;
};

//------------Solution Check------------------
const inputs = [
  ["7", "or", "hello world"],
  ["-1", "hello world", "or"],
  ["-1", "howdy", "hello world"],
  ["6", "oox", "ooboxoooxo"],
];

const fn = findIndex;

const solutionCheck = inputs => {
  for (let input of inputs) {
    const answer = input[0];
    const arg1 = input[1];
    const arg2 = input[2];

    console.log("Answer:", answer, "Result:", fn(arg1, arg2));
  }
};

solutionCheck(inputs);
