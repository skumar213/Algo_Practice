function crush(str) {
  if (uniqueCheck(str) || str.length < 3) return str;

  const count = countStr(str);

  if (count >= 3) return crush(str.slice(count));

  const newStr = str.slice(0, count) + crush(str.slice(count));
  return crush(newStr);
}

function uniqueCheck(str) {
  const obj = {};

  for (let char of str) {
    if (!(char in obj)) obj[char] = true;
    else return false;
  }

  return true;
}

function countStr(str) {
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[0] === str[i]) count++;
    else break;
  }

  return count;
}

const input1 = "aaabbbc"; //c
const input2 = "aabbbacd"; //cd
const input3 = "aabbccddeeedcba"; // ""
const input4 = "aaabbbacd"; // acd
const input5 = "abcdddf"; // abcf

console.log(crush(input1));
console.log(crush(input2));
console.log(crush(input3));
console.log(crush(input4));
console.log(crush(input5));

//Below is the iterative solution

function crush(str) {
  if (str.length < 3) return str

  const stack = [str[0], str[1]]

  for (let i = 2; i < str.length; i++) {
    const stackOne = stack[stack.length - 1]
    const stackTwo = stack[stack.length - 2]

    if (str[i] === stackOne && str[i] === stackTwo) {
      stack.pop();
      stack.pop();
    } else {
      stack.push(str[i])
    }
  }

  return stack.join('')
}
