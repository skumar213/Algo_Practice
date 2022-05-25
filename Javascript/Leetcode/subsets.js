//https://leetcode.com/problems/subsets/
var subsets = function (nums) {
  if (nums.length === 0) return [[]];
  else {
    const arr = subsets(nums.slice(0, nums.length - 1));
    const arrLen = arr.length;
    const currNum = nums[nums.length - 1];

    for (let i = 0; i < arrLen; i++) {
      arr.push([...arr[i], currNum]);
    }

    return arr;
  }
};

//Time: O(2 ^ n) - we have to go through all the subsets
//Space: O(n) - the recursive call stack will grow to size n

/*
Explination:

1) Keep recursively calling the function with one less item. Once it's empty it will return [[]]
2) Then iterate through the previous calls output and combine the current number (the excluded number of the current call)
    with all arrays in the original length of the previous calls output.
*/
