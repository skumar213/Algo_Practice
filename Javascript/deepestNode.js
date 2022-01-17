/*
------Prompt------
Given a binary tree, write a function that will return the node in the tree with greatest depth. You may assume there is a unique deepest node.

------Examples------
tree1 =
      30
    25    35
  20 26  32  40
19

findNodeDFS(tree1) -> 19

tree2 =
    A
  B   C
   D    E
 F

 findNodeDFS(tree2) -> F

------Solution------
-check if the node has a left, if yes call function again with that as the head node
-otherwise check the right, if yes call the function again with that as the head node
-if there are no children, make that the deepest node, and change the counter to how many levels that node is


------Time complexity------
O() -

------Space complexity------
O() -
*/

//------------Solution------------------

//Depth-first:post-order solution
const findNodeDFS = node => {
  let findNodeDFS;
  let deepestCount = 0;

  function findDeepest(node, counter = 0) {
    counter++;

    if (!node.left && !node.right) {
      if (counter > deepestCount) {
        findNodeDFS = node;
        deepestCount = counter;
      }
    }

    if (node.left) {
      findDeepest(node.left, counter);
    }

    if (node.right) {
      findDeepest(node.right, counter);
    }

    counter--;
  }

  findDeepest(node);
  return findNodeDFS.val;
};

//Breadth-first solution
const findNodeBFS = node => {
  const queue = [node];

  while (queue.length) {
    node = queue.pop();

    if (node.left) {
      queue.unshift(node.left);
    }

    if (node.right) {
      queue.unshift(node.right);
    }
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
