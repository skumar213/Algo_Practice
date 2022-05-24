//https://leetcode.com/problems/majority-element/

var majorityElement = function(nums) {
  const countObj = {}
  let ans = null;

  for (let num of nums) {
      if (!countObj[num]) {
          countObj[num] = 1;
      } else {
          countObj[num]++
      }
  }

  let count = -Infinity

  for (let key in countObj) {
      if (countObj[key] > count) {
          count = countObj[key]
          ans = key
      }

  }

  return ans
};

//Time: O(n) - have to iterate through nums once
//Space: O(n) - object can grow to size n in worst case
