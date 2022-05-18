//https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function (s) {
  let alphaS = "";
  s = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i);

    if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
      alphaS += s[i];
    }
  }

  let p1 = 0;
  let p2 = alphaS.length - 1;

  while (p1 < p2) {
    if (alphaS[p1] !== alphaS[p2]) return false;

    p1++;
    p2--;
  }

  return true;
};
