// https://leetcode.com/problems/add-two-numbers/

var addTwoNumbers = function (l1, l2) {
  let carryOver = 0;
  let ans;
  let prevNode;

  while (l1 || l2) {
    const l1Val = l1 ? l1.val : 0;
    const l2Val = l2 ? l2.val : 0;

    let sum = l1Val + l2Val + carryOver;

    if (sum > 9) {
      carryOver = parseInt(sum.toString()[0], 10);
      sum = parseInt(sum.toString()[1], 10);
    } else {
      carryOver = 0;
    }

    const node = new ListNode(sum);

    if (!ans) {
      ans = node;
      prevNode = node;
    } else {
      prevNode.next = node;
      prevNode = node;
    }

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  if (carryOver) prevNode.next = new ListNode(carryOver);

  return ans;
};

//Time: O(n) - n being the larger linked list
//Space: O(n) - the length of the new linked list (at most is n + 1)
