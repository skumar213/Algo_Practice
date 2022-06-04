//https://leetcode.com/problems/linked-list-cycle-ii/


var detectCycle = function(head) {
  if (!head) return head

  let slow = head
  let fast = head.next

  while (slow && fast && fast.next) {
      if (slow === fast) {
          return findHead(head, slow)
      }

      slow = slow.next;
      fast = fast.next.next
  }


  return null
};


function findHead(head, loopNode) {
  let loopCopy = loopNode;

  while (head !== loopNode) {
      loopNode = loopNode.next

      if (loopCopy === loopNode) {
          head = head.next
      }
  }


  return head
}



//Time: O(n) - go through the list once to find a loop node, then again to find the head of the loop
//Space: O(1) - no extra space is used


/*
This uses the fast and slow pointer approach

1) Have a slow and fast pointer moving through the linked list, if there is a cycle they will meet
2) At that point check if the head is equal to the loop node
    1) If not keep going through the cycle until it is either equal to the head or the original loop node
        1) if its equal to the head you found the start of the cycle and can return
        2) if not then inscrement the head and repeat


Basically find a node in the loop and then then keep going through the loop checking if its the head, whenever the loop node is equal to its original starting node, increment the head. Eventually the head will be at the start of the loop



*/
