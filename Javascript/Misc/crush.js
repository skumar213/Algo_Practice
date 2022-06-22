function crush(str) {
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[0] === str[i]) count++;
    else break;
  }

  if (count === 1 || str.length < 3) return str;
  else if (count >= 3) return crush(str.slice(count));
  else {
    const newStr = str.slice(0, count) + crush(str.slice(count));
    return crush(newStr);
  }
}

const input1 = "aaabbbc";
const input2 = "aabbbacd";
const input3 = "aabbccddeeedcba";
const input4 = "aaabbbacd";
const input5 = "aa";

console.log(crush(input1));
console.log(crush(input2));
console.log(crush(input3));
console.log(crush(input4));
console.log(crush(input5));
