//https://leetcode.com/problems/longest-palindromic-substring/solution/

var longestPalindrome = function (s) {
  if (s.length === 0 || s.length === 1) return s;

  let ans = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j >= 0; j--) {
      let left = i;
      let right = j;

      while (left < right) {
        if (s[left] !== s[right]) break;

        left++;
        right--;
      }

      if (left >= right) {
        const curr = s.slice(i, j + 1);
        if (curr.length > ans.length) ans = curr;
        break;
      }
    }
  }

  return ans;
};

//Time: O(n ^ 3) - theres three nested loops
//Space: O(1) - no extra space is used
