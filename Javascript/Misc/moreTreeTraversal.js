function inOrder(node, arr) {
  if (node.left) inOrder(node.left, arr);
  arr.push(node.value);
  if (node.right) inOrder(node.right, arr);
  return arr;
}

function preOrder(node, arr) {
  arr.push(node.value);
  if (node.left) preOrder(node.left, arr);
  if (node.right) preOrder(node.right, arr);
  return arr;
}

function postOrder(node, arr) {
  if (node.left) postOrder(node.left, arr);
  if (node.right) postOrder(node.right, arr);
  arr.push(node.value);
  return arr;
}

function BFS(node, arr) {
  const queue = [node];

  while (queue.length > 0) {
    const currentNode = queue.pop();

    arr.push(currentNode.value);

    if (currentNode.left) queue.unshift(currentNode.left);
    if (currentNode.right) queue.unshift(currentNode.right);
  }

  return arr;
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.right = six;

console.log(inOrder(one, [])); //[4,2,5,1,3,6]
console.log(preOrder(one, [])); //[1,2,4,5,3,6]
console.log(postOrder(one, [])); //[4,5,2,6,3,1]
console.log(BFS(one, [])); //[1,2,3,4,5,6]
