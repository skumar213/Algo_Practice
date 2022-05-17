//https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function (s) {
  const hashMap = Array(128).fill(0);
  let left = 0;
  let right = 0;
  let res = 0;

  while (right < s.length) {
    const r = s.charCodeAt(right);
    hashMap[r]++;

    while (hashMap[r] > 1) {
      const l = s.charCodeAt(left);
      hashMap[l]--;
      left++;
    }

    res = Math.max(res, right - left + 1);

    right++;
  }

  return res;
};

//Time: O(n) - will only go through the array twice at most
//Space: O(1) - the hash map is a constant size
