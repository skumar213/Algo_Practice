//https://leetcode.com/problems/binary-tree-inorder-traversal/

var inorderTraversal = function (root) {
  const stack = [];
  let curr = root;
  const ans = [];

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    ans.push(curr.val);
    curr = curr.right;
  }

  return ans;
};

//Time: O(n) - have to touch each node
//Space: O(n) - keep stack size of n
