//https://leetcode.com/problems/reverse-linked-list

var reverseList = function (head) {
  let next = null;
  let prev = null;

  while (head) {
    next = head.next;
    head.next = prev;

    prev = head;
    head = next;
  }

  return prev;
};

//Time: O(n) - have to visit each node once
//Space: O(1) - no extra space is used

/*
1) Use two variables to keep track of the next and previous nodes
2) Then loop and set the head.next to the previous node
    1) Then replace head with the next variable

*/
