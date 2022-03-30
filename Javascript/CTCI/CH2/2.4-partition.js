function partitionList(node, x) {
  let prevNode = node;
  let head = node;

  node = node.next;

  while (node) {
    if (node.value < x) {
      const tmpNext = node.next;
      node.next = head;
      head = node;
      prevNode.next = tmpNext;
      node = tmpNext;
    } else {
      prevNode = node;
      node = node.next;
    }
  }

  return head;
}

//Test
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const three = new Node(3);
const five = new Node(5);
const eight = new Node(8);
const fiveDup = new Node(5);
const ten = new Node(10);
const two = new Node(2);
const one = new Node(1);

three.next = five;
five.next = eight;
eight.next = fiveDup;
fiveDup.next = ten;
ten.next = two;
two.next = one;

let ans = partitionList(three, 5);
const ansArr = [];

while (ans) {
  ansArr.push(ans.value);
  ans = ans.next;
}

console.log(ansArr);

// Time: O(n) - make one pass through the list and each step is constant time
// Space: O(1) - no additional space is used
