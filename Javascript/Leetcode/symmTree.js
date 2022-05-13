//https://leetcode.com/problems/symmetric-tree/

var isSymmetric = function (root) {
  function isMirror(n1, n2) {
    if (n1 === null && n2 === null) return true;
    if (n1 === null || n2 === null) return false;
    return (
      n1.val === n2.val &&
      isMirror(n1.right, n2.left) &&
      isMirror(n1.left, n2.right)
    );
  }

  return isMirror(root, root);
};

//Time: O(n) - have to touch all nodes
//Space: O(n) - the recursive call stack
