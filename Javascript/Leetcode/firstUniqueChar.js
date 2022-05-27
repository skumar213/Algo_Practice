//https://leetcode.com/problems/first-unique-character-in-a-string/

var firstUniqChar = function (s) {
  if (s.length === 1) return 0;

  const hashMap = {};

  for (let i = 0; i < s.length; i++) {
    if (!hashMap[s[i]]) {
      hashMap[s[i]] = 1;
    } else {
      hashMap[s[i]]++;
    }
  }

  for (let j = 0; j < s.length; j++) {
    if (hashMap[s[j]] === 1) return j;
  }

  return -1;
};

//Time: O(n) - have to go through the string twice
//Space: O(1) - the hashMap will never be bigger than size 26 (26 letters in the alphabet)

/*
1) Iterate through the array once and store the count for each letter in a hash map
2) Then go back through the array and return the index of the first letter whos count is 1


*/
