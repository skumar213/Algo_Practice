//https://leetcode.com/problems/two-sum/

//solution
var twoSum = function(nums, target) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];

      if (hashMap[diff] !== undefined) return [i, hashMap[diff]]
      else hashMap[nums[i]] = i
  }
};

//Space & Time
//Time: O(n) - makes one pass through
//Space: O(n) - hash map will take n space


/*
Trick/Pattern

1) Can't sort the array since you need to return the index
2) Brute force will take n^2
3) To make the time n, you need to keep a hash table of each value and its index as you iterate through the array
    1) Then for each number in the arry you find the difference between it and the array. If that number is in the hash table you return its index along with the current index. Otherwise you add the current number and its index into the hash table
*/
