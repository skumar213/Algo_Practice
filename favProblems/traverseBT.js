/*
------Prompt------
Traverse a binary tree in the following methods:

1) DFS - Pre Order
2) DFS - Post Order
3) DFS - In Order
4) BFS
5) InsertNode a node
*/

//------------Solution------------------
const preOrder = node => {
  console.log(node.val);

  if (node.left) {
    preOrder(node.left);
  }

  if (node.right) {
    preOrder(node.right);
  }
};

const postOrder = node => {
  if (node.left) {
    postOrder(node.left);
  }

  if (node.right) {
    postOrder(node.right);
  }

  console.log(node.val);
};

const inOrder = node => {
  if (node.left) {
    inOrder(node.left);
  }

  console.log(node.val);

  if (node.right) {
    inOrder(node.right);
  }
};

const BFS = node => {
  const queue = [node];

  while (queue.length) {
    node = queue.pop();

    console.log(node.val);

    if (node.left) {
      queue.unshift(node.left);
    }

    if (node.right) {
      queue.unshift(node.right);
    }
  }
};

const insertNode = (node, value) => {
  if (value > node.val) {
    if (!node.right) {
      node.right = new Node(value);
      node.right.parent = node;
      return node.right
    } else {
      return insertNode(node.right, value);
    }
  } else if (value < node.val) {
    if (!node.left) {
      node.left = new Node(value);
      node.left.parent = node;
      return node.left
    } else {
      return insertNode(node.left, value)
    }
  }
}

//------------Solution Check------------------
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

const zero = new Node("0");
const one = new Node("1");
const two = new Node("2");
const three = new Node("3");
const four = new Node("4");
const five = new Node("5");
const six = new Node("6");

three.right = five;
three.left = one;
one.parent = three;
one.left = zero;
one.right = two;
zero.parent = one;
two.parent = one;
five.parent = three;
five.right = six;
five.left = four;
four.parent = five;
six.parent = five;

// BFS(three) //3,1,5,0,2,4,6
// inOrder(three) //0,1,2,3,4,5,6
// preOrder(three); //3,1,0,2,5,4,6
// postOrder(three) //0,2,1,4,6,5,3
console.log(insertNode(three, '7')) // will return the node 7 with parent as 6
