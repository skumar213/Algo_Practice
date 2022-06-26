function crush(str) {
  if (str.length < 3) return str;

  const stack = [str[0], str[1]];

  for (let i = 2; i < str.length; i++) {
    const topOne = stack[stack.length - 1];
    const topTwo = stack[stack.length - 2];

    if (topOne === str[i] && topTwo === str[i] && str[i] !== str[i + 1]) {
      while (stack[stack.length - 1] === str[i]) {
        stack.pop();
      }
    } else {
      stack.push(str[i]);
    }
  }

  return stack.join("");
}

const input1 = "aaabbbc"; //c
const input2 = "aabbbacd"; //cd
const input3 = "aabbccddeeedcba"; // ""
const input4 = "aaabbbbacd"; // acd
const input5 = "abcdddf"; // abcf

console.log(crush(input1));
console.log(crush(input2));
console.log(crush(input3));
console.log(crush(input4));
console.log(crush(input5));
