// Link: https://leetcode.com/problems/permutations/submissions/

var permute = function (nums) {
  if (nums.length === 1) return [nums];
  else {
    const arr = permute(nums.slice(0, nums.length - 1));
    const currNum = nums[nums.length - 1];
    const ans = [];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        const tmp = [...arr[i]];

        tmp.splice(j, 0, currNum);

        ans.push(tmp);
      }
    }

    return ans;
  }
};

//Time: O(n!) - have to find all permutations
//Space: O(n) - the recursive call stack will go up to nums length

/*
Explination

1) Keep recursively calling the function until you have length of one. A list of one is already sorted
2) Then return it to the call above in the call stack and then take the last number of the current nums arr and put the it in front and after each digit in the returned array

ex:

[1,2,3] = [[3,1,2], [1,3,2], [1,2,3], [3,2,1], [2,3,1], [2,1,3]]
[1,2] = [[1,2], [2,1]]
[1] = [[1]]


*/
