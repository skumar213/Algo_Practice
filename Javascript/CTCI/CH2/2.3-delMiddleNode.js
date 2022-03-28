function delMiddleNode(middleNode) {
  middleNode.value = middleNode.next.value;
  middleNode.next = middleNode.next.next;
}

//Test
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);

one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;

delMiddleNode(three);

const ansArr = [];

let node = one;
while (node) {
  ansArr.push(node.value);
  node = node.next;
}

console.log(ansArr);

//Time: O(1) - does one operation for each call
//Space: O(1) - no space is used
