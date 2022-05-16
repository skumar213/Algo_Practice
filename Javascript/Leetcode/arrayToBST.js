//https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solution/

var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;
  if (nums.length === 1) return new TreeNode(nums[0]);

  let middle;

  if (nums.length === 2) middle = 1;
  else
    middle =
      nums.length % 2 === 1 ? Math.floor(nums.length / 2) : nums.length / 2;

  const root =
    middle >= 0 && middle < nums.length ? new TreeNode(nums[middle]) : null;

  if (root) {
    root.left = sortedArrayToBST(nums.slice(0, middle));
    root.right = sortedArrayToBST(nums.slice(middle + 1));
  }

  return root;
};

//Time: O(n) - each node will be visited once
//Space: O(log n) - since its building the tree with binary search, the call stack will be log n deep
