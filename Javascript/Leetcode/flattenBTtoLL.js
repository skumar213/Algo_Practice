// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/

var flatten = function(root) {
  if (!root || (!root.left && !root.right)) return root

  const nodes = [];

  function preOrder(root) {
      nodes.push(root)
      if (root.left) preOrder(root.left)
      if (root.right) preOrder(root.right)
  }

  preOrder(root)

  for (let i = 0; i < nodes.length; i++) {
      if (i === nodes.length - 1) {
          nodes[i].right = null
      } else {
          nodes[i].right = nodes[i + 1]
      }

      nodes[i].left = null
  }
};


/*
Time: O(n) - goes through all nodes
Space: O(1) - constant space is used
*/

/*
Trick/Pattern

1) use an array and keep track of all the nodes in pre-orcer
2) then go through all the nodes link them accordingly

*/
