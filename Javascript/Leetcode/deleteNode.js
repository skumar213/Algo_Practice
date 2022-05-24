//https://leetcode.com/problems/delete-node-in-a-linked-list/submissions/

var deleteNode = function (node) {
  if (!node) return;

  while (node && node.next) {
    node.val = node.next.val;
    node.next = node.next;

    if (!node.next.next) {
      node.next = null;
    }

    node = node.next;
  }
};

//Time: O(n) - length of all nodes if its the head node
//Space: O(1) - no extra space is used

/*
Explination

Replace the current node's value and next pointer to the next nodes values. Keep going until you are at the second to last node.
Here change the value to the next one and then the next pointer to null

*/
