// https://leetcode.com/problems/linked-list-cycle/solution/

var hasCycle = function (head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head.next.next;

  while (fast) {
    if (slow === fast) return true;

    slow = slow.next;
    fast = fast.next ? fast.next.next : null;
  }

  return false;
};

//Time: O(n) - if there is no cycle it will go once through
//Space: O(1) - no space is used
