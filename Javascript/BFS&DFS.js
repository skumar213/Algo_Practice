/*
------Prompt------
Write a series of iterator functions for trees in the following ways.

1) Breadth First
2) Depth First: PreOrder
3) Depth First: PostOrder

Each of these function will take a node of the tree and a callback. The function will iterate through the child nodes, calling the callback function on each of them. The difference between them is the order in which they iterate.

------Examples------
        A
      B   C
    D  E  F G

A: B, C
B: D, E,
C: F, G

BFS(node-a, callback) -> A, B, C, D, E, F, G
DFSPre(node-a, callback) -> A, B, D, E, C, F, G
DFSPost(node-a, callback) -> D, E, B, F, G, C, A

------Solution------
BFS
Use a queue to keep track of each node, then use a while loop to go through each node. Since it's breadth-first, you process the current node and then add the children to the queue (in order so the first one added will be the first one looked at).

DFSPre
Process the current node first and then recursively call the same function on its children

DFSPost
Recursively call the same function on the nodes children, then process the node.

------Time complexity------
BFS
O(N * M) - The function has to loop through all the nodes and the forEach method has to loop through the node's children

DFSPre & DFSPost
O(N) - The function has to go through all the nodes

------Space complexity------
BFS
O(N) - The queue will populate with the each node's children

DFSPre & DFSPost
O(N) - The call stack will use space due to it being recursive
*/

//A,

//------------Solution------------------
const BFS = (node, callback) => {
  const queue = [node];

  while (queue.length > 0) {
    const currentNode = queue.pop();

    callback(currentNode.value);

    currentNode.children.forEach(n => queue.unshift(n));
  }
};

const DFSPre = (node, callback) => {
  callback(node.value);

  for (let child of node.children) {
    DFSPre(child, callback);
  }
};

const DFSPost = (node, callback) => {
  for (let child of node.children) {
    DFSPost(child, callback);
  }

  callback(node.value);
};






//------------Solution Check------------------
function node(value) {
  return {
    value,
    children: [],
  };
}
var a = node("a");
var b = node("b");
var c = node("c");
var d = node("d");
var e = node("e");
var f = node("f");
var g = node("g");
var h = node("h");
var i = node("i");
var j = node("j");
var k = node("k");
var l = node("l");
var m = node("m");

a.children.push(b, c, d);
b.children.push(e);
e.children.push(k, l);
c.children.push(f, g, h);
h.children.push(m);
d.children.push(i, j);

const solutionCheck = input => {
  console.log(input);
};

// BFS(a, solutionCheck)
// DFSPre(a, solutionCheck);
// DFSPost(a, solutionCheck);
