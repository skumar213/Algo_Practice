// https://leetcode.com/problems/maximum-depth-of-binary-tree/solution/

var maxDepth = function (root) {
  if (!root) return 0;

  const queue = [[root]];
  let levelCount = 0;

  while (queue.length) {
    const levelArr = [];
    levelCount++;

    const nodesInLevel = queue.pop();

    while (nodesInLevel.length) {
      const node = nodesInLevel.pop();
      if (node.left) levelArr.push(node.left);
      if (node.right) levelArr.push(node.right);
    }

    if (levelArr.length) queue.unshift(levelArr);
  }

  return levelCount;
};

//Time: O(n) - have to touch all the nodes
//Space: O(n) - nodesInLevel has to hold all the nodes. Worst case it could be one level with all the nodes
