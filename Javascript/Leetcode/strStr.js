// https://leetcode.com/problems/implement-strstr/

var strStr = function (haystack, needle) {
  if (!needle.length) return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.slice(i, i + needle.length) === needle) return i;
    }
  }

  return -1;
};

//Time: O(n) - have to go through the haystack once
//Space: O(1) - no extra space is used
