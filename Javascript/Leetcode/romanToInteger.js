//Link: https://leetcode.com/problems/roman-to-integer/

var romanToInt = function (s) {
  let sum = 0;

  const convert = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && convert[s[i]] < convert[s[i + 1]]) {
      sum += convert[s[i + 1]] - convert[s[i]];
      i++;
    } else {
      sum += convert[s[i]];
    }
  }

  return sum;
};

//Time: O(n) - has to iterate through string
//Space: O(n) - convert object is the size of n
