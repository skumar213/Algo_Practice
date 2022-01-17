/*
------Prompt------
Given a binary tree, write a function that will return the node in the tree with greatest depth. You may assume there is a unique deepest node.

------Examples------
tree1 =
      30
    25    35
  20 26  32  40
19

deepestNode(tree1) -> 19

tree2 =
    A
  B   C
   D    E
 F

 deepestNode(tree2) -> F

------Solution------
-check if the node has a left, if yes call function again with that as the head node
-otherwise check the right, if yes call the function again with that as the head node
-if there are no children, make that the deepest node, and change the level to how many levels that node is


DFS:post-order
Use a nested function to traverse the nodes, the inputs are the current node and level. If the current node has no children and the current level is higher than the previous highest one, it will make the current level and node the deepest in assigned variables. If the node does have a left or right, respectively. It will call the nested function again with that node and level + 1 as the arguments. It will keep going until it has gone through all the nodes and will then reutrn the value of the deepest node.

BFS
Use a queue to keep track of the order in which to analyze each node. The while loop will keep going as long as theres values in the queue and with each iteration will redefine the node as the currently selected node. When the while loop finishes, the node variable will be the deepest node in the tree. The function will return the value of that node.


------Time complexity------
DFS & BFS
O(N) - Have to go through all the nodes

------Space complexity------
DFS
O(N) - Each recursive call will use memory on the call stack

DFS
O(N) - The queue will populate with nodes that still need to be vistied
*/

//------------Solution------------------

//Depth-first:post-order solution
const findNodeDFS = node => {
  let deepestNode = node;
  let deepestLevel = 1;

  function findDeepest(node, level = 1) {
    if (!node.left && !node.right) {
      if (level > deepestLevel) {
        deepestNode = node;
        deepestLevel = level;
      }
    }

    if (node.left) {
      findDeepest(node.left, level + 1);
    }

    if (node.right) {
      findDeepest(node.right, level + 1);
    }
  }

  findDeepest(node);
  return deepestNode.val;
};

//Breadth-first solution
const findNodeBFS = node => {
  const queue = [node];

  while (queue.length) {
    node = queue.pop();

    if (node.left) queue.unshift(node.left);

    if (node.right) queue.unshift(node.right);
  }

  return node.val;
};

//------------Solution Check------------------
function node(val) {
  return {
    val,
    left: null,
    right: null,
  };
}
let a = node("a");
let b = node("b");
let c = node("c");
let d = node("d");
let e = node("e");
let f = node("f");

a.left = b;
a.right = c;
b.right = d;
d.left = f;
c.left = e;

console.log(findNodeDFS(a)); //Result: f
console.log(findNodeBFS(a)); //Result: f

let nodeA = node(30);
let nodeB = node(25);
let nodeC = node(35);
let nodeD = node(20);
let nodeE = node(26);
let nodeF = node(32);
let nodeG = node(40);
let nodeH = node(19);

nodeA.left = nodeB;
nodeA.right = nodeC;
nodeB.right = nodeD;
nodeB.left = nodeE;
nodeD.left = nodeH;
nodeC.left = nodeF;
nodeC.right = nodeG;

console.log(findNodeDFS(nodeA)); //Result: 19
console.log(findNodeBFS(nodeA)); //Result: 19
