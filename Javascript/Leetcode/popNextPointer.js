//https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

//with queue
var connect = function(root) {
  if (!root || (!root.left && !root.right)) return root

  const queue = [root];

  while (queue.length) {
      const qLen = queue.length

      for (let i = 0; i < qLen; i++) {
          const node = queue.pop();

          if (node.left) queue.unshift(node.left)
          if (node.right) queue.unshift(node.right)


          if (i < qLen - 1) {
              node.next = queue[queue.length - 1]
          }
      }
  }

  return root
};

//Time: O(n) - have to visit all nodes
//Space: O(n) - the queue will have to hold n nodes

/*
1) Uses a queue to perform BFS
2) On each level you connect all the next pointers and the move on to their children
    1) The queue will maintain the correct order of connections
*/


//no queue
var connect = function(root) {
  if (!root || (!root.left && !root.right)) return root

  if (root.left) root.left.next = root.right;
  if (root.right && root.next) root.right.next = root.next.left

  connect(root.left)
  connect(root.right)

  return root
};

//Time: O(n) - have to visit all nodes
//Space: O(1) - the question states that recursive calls don't count towards memory. Otherwise this would be n

/*
1) Uses the previously established next pointer to make the next connection
2) Set the children to connect
3) Then if a next pointer exists, connect the the right child of the current node to the left child of its next pointer

*/





