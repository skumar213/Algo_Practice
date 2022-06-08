//https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

var buildTree = function(preorder, inorder) {
  const solution = new Helper()

  return solution.build(preorder, inorder)
};

class Helper{
  constructor() {
      this.hashMap = {}
  }

  build(preorder, inorder) {
      const rootIdx = inorder.indexOf(preorder[0])

      //make root
      const node = new TreeNode(preorder[0], null, null)
      this.hashMap[node.val] = true;

      //make left & right
      const leftIdx = inorder.indexOf(preorder[1])

      if (leftIdx !== -1 && leftIdx < rootIdx) {
          node.left = this.build(preorder.slice(1), inorder.slice(0, rootIdx))

          let idx = 2

          //move idx forward when a value has been used
          while (this.hashMap[preorder[idx]]) idx++

          const rightIdx = inorder.indexOf(preorder[idx])

          if (rightIdx !== -1 && rightIdx > rootIdx) {
              node.right = this.build(preorder.slice(idx), inorder.slice(rootIdx + 1))
          }
      } else if (leftIdx !== -1 && leftIdx > rootIdx) {
          node.right = this.build(preorder.slice(1), inorder.slice(rootIdx + 1))
      }

      return node
  }
}


//Time: O(n^2) - have to make n recursive calls and each step takes n time. This can be reduced to just n by removing the slice and indexOf calls.
//Space: O(n) - the recursive call stack and the hashMap take n space


/*
1) Uses the first element of preorder as the root and then constructs a tree around it from inorder
    1) From the first elements index in inorder you build a tree from everything to the left or it and then the same from all items to the left



*/
