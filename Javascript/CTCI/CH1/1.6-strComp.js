function strComp(str) {
  let allOnes = true;
  let ans = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      ans += str[i];
      continue;
    }

    if (ans[ans.length - 1] === str[i]) {
      count++;
      if (allOnes) allOnes = false;
      if (i === str.length - 1) ans += `${count}`;
    } else {
      ans += `${count}` + str[i];
      count = 1;
    }
  }

  if (allOnes) return str;
  return ans;
}

//Tests
console.log(strComp("aabcccccaaa")); //=> a2b1c5a3
console.log(strComp("abc")); //=> abc

//Time: O(n) - have to iterate through string once
//Space: O(1) - the output string doesn't count towards space complexity
