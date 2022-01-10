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

BFS(node-a, callback) -> A,B,C,D,E,F,G
DFSPre(node-a, callback) -> A, B, D, E, C, F, G
DFSPost(node-a, callback) -> D, E, B, F, G, C, A
------Solution------


------Time complexity------
O() -

------Space complexity------
O() -
*/

//A,

//------------Solution------------------
const BFS = (node, callback) => {
  const queue = [node]; 

  while (queue.length > 0) {
    const currentNode = queue.pop();

    callback(currentNode.value);

    currentNode.forEach(n => queue.shift(n))
  }
}








//------------Solution Check------------------
function node(value) {
  return {
    value,
    children: [],
  };
}
var a = node('a');
var b = node('b');
var c = node('c');
var d = node('d');
var e = node('e');
var f = node('f');
var g = node('g');
var h = node('h');
var i = node('i');
var j = node('j');
var k = node('k');
var l = node('l');
var m = node('m');

a.children.push(b, c, d);
b.children.push(e);
e.children.push(k, l);
c.children.push(f, g, h);
h.children.push(m);
d.children.push(i, j);

const solutionCheck = input => {
  console.log(input)
};

BFS(a, solutionCheck)







