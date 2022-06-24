function inOrder(node, arr) {
  const stack = [];
  let curr = node;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    arr.push(curr.value);
    curr = curr.right;
  }

  return arr;
}

function preOrder(root, arr) {
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    arr.push(node.value);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return arr;
}

function postOrder(node, list) {
  let S = [];
  // Check for empty tree
  if (node === null) return list;

  S.push(node);

  let prev = null;

  while (S.length) {
    let current = S[S.length - 1];

    /* go down the tree in search of a leaf an if so process it
      and pop stack otherwise move down */
    if (prev === null || prev.left === current || prev.right === current) {
      if (current.left !== null) S.push(current.left);
      else if (current.right !== null) S.push(current.right);
      else {
        S.pop();
        list.push(current.value);
      }

      /* go up the tree from left node, if the child is right
          push it onto stack otherwise process parent and pop
          stack */
    } else if (current.left === prev) {
      if (current.right !== null) S.push(current.right);
      else {
        S.pop();
        list.push(current.value);
      }

      /* go up the tree from right node and after coming back
          from right node process parent and pop stack */
    } else if (current.right === prev) {
      S.pop();
      list.push(current.value);
    }

    prev = current;
  }

  return list;
}

function BFS(root, arr) {
  const queue = [root];

  while (queue.length) {
    const node = queue.pop();

    arr.push(node.value);
    if (node.left) queue.unshift(node.left)
    if (node.right) queue.unshift(node.right)

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

// console.log(inOrder(one, [])); //[4,2,5,1,3,6]
// console.log(preOrder(one, [])); //[1,2,4,5,3,6]
// console.log(postOrder(one, [])); //[4,5,2,6,3,1]
console.log(BFS(one, [])); //[1,2,3,4,5,6]
