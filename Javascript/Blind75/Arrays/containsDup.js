//https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function (nums) {
  const hashMap = {};

  for (let num of nums) {
    if (!hashMap[num]) hashMap[num] = true;
    else return true;
  }

  return false;
};

/*
Space & Time

Time: O(n) - makes one pass through nums
Space: O(n) - hash table will be size of at worst

*/

/*
In order to do it in time n, you need to keep a hash table that keeps track of the previous numbers. This way if a number is already in the hash table you can immediately return true

*/
