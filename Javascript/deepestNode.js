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
-if there are no children, make that the deepest node, and change the counter to how many levels that node is


------Time complexity------
O() -

------Space complexity------
O() -
*/

//------------Solution------------------
const deepestNode = (node) => {
  let deepestNode;
  let deepestCount;
  let counter = 0;

  function findDeepest(node, counter) {
    counter++;

    if (!node.left && !node.right) {
      deepest = node;
      deepestCount = counter;

      counter = 0
    }

    if (node.left){
      findDeepest(node.left)
    }

    if (node.right) {
      findDeepest(node.right)
    }
  }

  deepestNode(node)
  return deepestNode.val
}







//------------Solution Check------------------
const inputs = [
  [false, "[][(){}"],
  [false, "({)}"],
  [true, "({[]})"],
  [true, "text ( is allowed ){rwwrwrrww [] ()}"],
];

const fn = hasBalancedBrackets;

const solutionCheck = inputs => {
  for (let input of inputs) {
    const answer = input[0];
    const arg1 = input[1];
    const result = fn(arg1);

    console.log("Answer:", answer, "|", "Result:", result);
  }
};

solutionCheck(inputs);
