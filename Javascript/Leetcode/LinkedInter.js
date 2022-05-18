//https://leetcode.com/problems/intersection-of-two-linked-lists/submissions/

var getIntersectionNode = function (headA, headB) {
  if (headA === headB) return headA;

  let headACopy = headA;
  let headBCopy = headB;
  let headALen = 1;
  let headBLen = 1;

  while (headA.next) {
    headALen++;
    headA = headA.next;
  }

  while (headB.next) {
    headBLen++;
    headB = headB.next;
  }

  if (headA !== headB) return null;

  while (headBLen > headALen) {
    headBCopy = headBCopy.next;
    headBLen--;
  }

  while (headALen > headBLen) {
    headACopy = headACopy.next;
    headALen--;
  }

  while (headACopy !== headBCopy) {
    headACopy = headACopy.next;
    headBCopy = headBCopy.next;
  }

  return headACopy;
};

//Time: O(n + m) - have to go through both linked lists in the worst case
//Space: O(1) - no extra space is used
