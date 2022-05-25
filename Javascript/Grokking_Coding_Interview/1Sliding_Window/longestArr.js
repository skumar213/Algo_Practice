/*
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".


*/

const longest_substring_with_k_distinct = function (str, k) {
  if (k >= str.length) return str;

  let ans = -Infinity;
  let start = 0;
  const history = {};

  for (let i = 0; i < str.length; i++) {
    if (Object.keys(history).length !== k) {
      if (!history[str[i]]) {
        history[str[i]] = 1;
      } else {
        history[str[i]]++;
      }
    } else if (!history[str[i]]) {
      while (Object.keys(history).length === k) {
        history[str[start]]--;

        if (history[str[start]] === 0) delete history[str[start]];

        start++;
      }

      history[str[i]] = 1;
    } else {
      history[str[i]]++;
    }

    ans = Math.max(ans, i + 1 - start);
  }

  return ans;
};

//Time: O(n) - Outer for loop will go through the string once and the inner while loop will at worst be n
//Space: O(k) - The history object will grow to size k to keep track of all current letters

/*
Explination

1) Uses sliding window method. Keeps adding letters to the history object until its key length is equal to k
2) Then it will only increment the letters already in the histroy, otherwise it will run a while loop closing the
    sliding window one letter at a time until there are less than k letters in the history object
3) Each iteration of the for loop will update the answer varialbe with the longest subarry


*/
