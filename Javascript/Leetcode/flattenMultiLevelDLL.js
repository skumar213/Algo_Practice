//https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/

var flatten = function(head) {
  if (!head) return head;

  const tmpHead = new Node(0, null, head, null);
  let prev = tmpHead;

  const stack = [head];

  while (stack.length) {
      let curr = stack.pop();

      prev.next = curr;
      curr.prev = prev;

      if (curr.next) {
          stack.push(curr.next)
      }

      if (curr.child) {
          stack.push(curr.child);
          curr.child = null
      }

      prev = curr;
  }

  tmpHead.next.prev = null;
  return tmpHead.next
};

/*
Time: O(n) - have to go through all nodes;
Space: O(n) - stack could have n nodes in the worst case
*/

/*
Trick/Pattern

Use a stack to keep track of the order of the nodes that you want to visit. You put the next node first and then the child node into the stack. That way on the next iteration it will visit the child node first and will allow you to traverse the graph in the correct order.


*/
