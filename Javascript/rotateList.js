/*
------Prompt------
Given the head of a linked list, rotate the list to the right by k places.

------Examples------
node = [1,2,3,4,5]


rotateList(node, 1) -> [5,1,2,3,4]
rotateList(node, 4) -> [2,3,4,5,1]
rotateList(node, 5) -> [1,2,3,4,5]
rotateList(node, 6) -> [5,1,2,3,4]
rotateList(node, 0) -> [1,2,3,4,5]

------Solution------


------Time complexity------
O() -

------Space complexity------
O() -
*/

//------------Solution------------------





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
