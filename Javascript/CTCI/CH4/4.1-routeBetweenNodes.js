function isPath(n1, n2) {
  const queue = [n1];

  while (queue.length) {
    const node = queue.pop();

    if (node === n2) return true;
    node.visited = true;

    for (let child of node.children) {
      if (!child.visited) queue.unshift(child);
    }
  }

  return false;
}

//Tests
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

const zero = new Node(0);
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);

zero.children.push(one);
one.children.push(two);
two.children.push(three);
three.children.push(...[one, four]);
five.children.push(four);

console.log(isPath(zero, three)); //true
// console.log(isPath(zero, five)); //false

//Time: O(n) - need to visit each node
//Space: O(1) - no extra space is used
