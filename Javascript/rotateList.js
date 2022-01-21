/*
------Prompt------
Given the head of a linked list, rotate the list to the right by k places.

------Examples------
input = node head and how many places to rotate it
output = new head node that links the list in the correct order

node = [1,2,3,4,5]

rotateList(node, 1) -> [5,1,2,3,4]
rotateList(node, 4) -> [2,3,4,5,1]
rotateList(node, 5) -> [1,2,3,4,5]
rotateList(node, 6) -> [5,1,2,3,4]
rotateList(node, 0) -> [1,2,3,4,5]

------Solution------
if k is greater than the length - 1 of the array, k = k - arr.length
use a while loop (while node.next exists) and push up the value to the results array
  if at any point k is greater than or equal to the length, k = k - arr.length
  then insert the value and k index

use a while loop and push all the nodes values to the resutls array
then
if k is greater than the length - 1 of the array, k = k - arr.length

------Time complexity------
O() -

------Space complexity------
O() -
*/

//------------Solution------------------
const rotateList = (head, k) => {
  const allNodes = [];
  let resultHead;
  if (k >= allNodes.length) k -= allNodes.length;

  while (head) {
    allNodes.push(head);
    head = head.next;
  }

  const sortedNodes = allNodes
    .slice(allNodes.length - k)
    .concat(allNodes.slice(0, allNodes.length - k));

  resultHead = sortedNodes[0];
  head = sortedNodes[0];

  for (let i = 0; i < sortedNodes.length; i++) {
    if (i === sortedNodes.length - 1) {
      head.next = null;
    } else {
      head.next = sortedNodes[i + 1];

      head = head.next;
    }
  }

  return resultHead;
};

//------------Solution Check------------------
class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const e = new ListNode(5, null);
const d = new ListNode(4, e);
const c = new ListNode(3, d);
const b = new ListNode(2, c);
const a = new ListNode(1, b);

const solutionCheck = node => {
  const results = [];

  while (node) {
    results.push(node.val);
    node = node.next;
  }

  console.log(results);
};

solutionCheck(rotateList(a, 1));
