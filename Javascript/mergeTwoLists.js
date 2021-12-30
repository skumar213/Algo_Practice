/*
Prompt:
Write a function that takes in the heads of two Singly Linked Lists that are in sorted order, respectively. The function should merge the lists in place (i.e., it shouldn't create a brand new list) and return the head of the merged list; the merged list should be in sorted order. Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to null if it's the tail of the list.

Examples:
headOne = 2 -> 6 -> 7 -> 8 // the head node with value 2
headTwo = 1 -> 3 -> 4 -> 5 -> 9 -> 10 // the head node with value 1
mergeLinkedLists(headOne, headTwo) = 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 // the new head node with value 1

Solution:


Time complexity:


Space complexity:


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

const headone = createList([2, 6, 7, 8]);
const headtwo = createList([1, 3, 4, 5, 9, 10]);

const inputs = [[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], headone, headtwo]];

const fn = mergeTwoLists;

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
    let result = fn(arg1, arg2);

    listResult = checkHead(result)

    console.log("Answer:", answer, "|", "Result:", listResult);
  }
};

solutionCheck(inputs);
