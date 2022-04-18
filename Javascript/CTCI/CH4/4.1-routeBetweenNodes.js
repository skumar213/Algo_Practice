function pathFinder(graph, n1, n2) {
  //add visited property
  for (let node of graph.nodes) {
    const queue = [node];

    while (queue.length) {
      const currentNode = queue.pop();
      currentNode.visited = false;

      for (let child of currentNode.children) {
        if (child.visited !== false) queue.push(child);
      }
    }
  }

  //check n1 -> n2
  if (isPath(n1, n2)) return true;

  //clear visited property
  clearVisited(n1);

  //check n2 - n1
  return isPath(n2, n1);
}

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

function clearVisited(n1) {
  const queue = [n1];

  while (queue.length) {
    const node = queue.pop();

    node.visited = false;

    for (let child of node.children) {
      if (child.visited) queue.unshift(child);
    }
  }
}

//Tests
class Graph {
  constructor() {
    this.nodes = [];
  }
}

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

const graph = new Graph();
graph.nodes.push(...[zero, five]);

console.log(pathFinder(graph, zero, three)); //true
console.log(pathFinder(graph, three, zero)); //true
console.log(pathFinder(graph, zero, five)); //false
console.log(pathFinder(graph, five, zero)); //false

//Time: O(n) - need to visit each node in the worst case
//Space: O(1) - no extra space is used
