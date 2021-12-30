/*
------Prompt------
Write a function that takes in the heads of N sorted Singly Linked Lists and return the merged list. The merged list should be in sorted order Each Linked List node has an integer value as well as a next node pointing to the next node in the list or to none / null if it is the tail of the list.

------Examples------
Input =
[
  1->5->7,
  1->2->4->8,
  3->6->8
]
Output = 1->1->2->3->4->5->6->7->8->8

------Solution------
Break the problem into two smaller problems, first solve for two lists in a helper function and then solve two at a time in the main function.

For the helper function that find the highest of two nodes: Use pointers to keep track of each node as you compare their values. Assign a variable to the node that starts with a lower value (this also become the main pointer). Then iterate with a while loop until the main pointers next value is null. In the process compare the second nodes value to the next value of the main node. If the second nodes value is less than the main nodes next value, insert the second node as the main node's next property. Once the loop is finished, add the remaining items from the second node to the main nodes next (this is fine since the nodes values are already sorted).

In the main function: loop over the array of nodes and compare two at a time with the helper function. Once the loop is done return the result of the helper function

------Time complexity------
O(N * (N+M)) - mergeNLists for loop has a O(N) since it has to go through all the head nodes. And the mergeTwoLists is called on each pair has a O(N+M) since it has to go through all the items in both input nodes

------Space complexity------
O(1) - the memory needed doesn't increase based on the size of the input. You just merge the nodes and don't create any new ones.

*/

//------------Solution------------------

const mergeTwoLists = (headOne, headTwo) => {
  let p1 = headOne.value < headTwo.value ? headOne : headTwo;
  let p2 = p1 === headOne ? headTwo : headOne;
  let head = p1;

  while (p1.next) {
    if (p1.next.value > p2.value) {
      let tmp = p1.next;
      p1.next = p2;
      p2 = tmp;
    }

    p1 = p1.next;
  }

  p1.next = p2;
  return head;
};

const mergeNLists = nodes => {
  let head = nodes[0];

  for (let i = 1; i < nodes.length; i++) {
    head = mergeTwoLists(head, nodes[i]);
  }

  return head;
};

//------------Solution Check------------------
class LinkedList {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

function createList(nums) {
  let head = new LinkedList(nums[0]);
  let origHead = head;
  for (let i = 1; i < nums.length; i++) {
    head.next = new LinkedList(nums[i]);
    head = head.next;
  }
  return origHead;
}

const headone = createList([1, 5, 7]);
const headtwo = createList([1, 2, 4, 8]);
const headthree = createList([3, 6, 8]);

const inputs = [[[1, 1, 2, 3, 4, 5, 6, 7, 8, 8], headone, headtwo, headthree]];

const fn = mergeNLists;

function checkHead(head) {
  const arr = [];

  while (head) {
    arr.push(head.value);
    head = head.next;
  }

  return arr;
}

const solutionCheck = inputs => {
  for (let input of inputs) {
    const answer = input[0];
    const arg1 = input[1];
    const arg2 = input[2];
    const arg3 = input[3];
    const result = fn([arg1, arg2, arg3]);

    const listResult = checkHead(result);

    console.log("Answer:", answer, "|", "Result:", listResult);
  }
};

solutionCheck(inputs);
