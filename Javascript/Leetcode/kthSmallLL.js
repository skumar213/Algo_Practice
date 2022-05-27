//https://leetcode.com/problems/kth-smallest-element-in-a-bst/solution/

var kthSmallest = function (root, k) {
  const vals = [];

  function helper(root, k) {
    if (root.left) {
      helper(root.left, k);
      k--;
    }

    vals.push(root.val);

    if (root.right) {
      helper(root.right, k);
      k--;
    }

    return k;
  }

  helper(root, k);

  return vals[k - 1];
};

//Time: O(n) - go through all the nodes
//Space: O(n) - the recursive call stack goes n deep and the vals array will be size of n

/*
Use the in order traversal method to fill the vals array with all the values in order.
Then the answer will be k-1 element in the array

*/
