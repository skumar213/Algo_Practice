//https://leetcode.com/problems/reverse-linked-list

//Iteratively
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


//Recursively
var reverseList = function(head) {
  if (!head || !head.next) return head

  let p = reverseList(head.next) //5
  head.next.next = head //5->4
  head.next = null; //4-> null
  return p //5
};


//Time: O(n) - have to visit each node once
//Space: O(n) - recursive call stack will be n


/*
1) Base case is to return the head
2) Then set node.next.next to the current node
3) Then set node.next to null to avoid a loop
4) The last node will get returned all the way up since it's the new head

*/
