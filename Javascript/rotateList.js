/*
------Prompt------
Given the head of a linked list, rotate the list to the right by k places.

------Examples------
input = node head and how many places to rotate it
output = new head node that links the list in the correct order

node = [1,2,3,4,5]

rotateList(node, 1) -> [5,1,2,3,4]
rotateList(node, 4) -> [2,3,4,5,1]
rotateList(node, 5) -> [1,2,3,4,5]
rotateList(node, 6) -> [5,1,2,3,4]
rotateList(node, 0) -> [1,2,3,4,5]

------Solution------
Have the edge cases up top, return null if head doesn't exist and return the head if k = 0. Now we now we do have to shift, even if its all the around back to the starting point

Need variables to keep track of the current head to return and counters to keep track of the length of the nodes. Also a boolean to know when you've created a loop

Loop through the nodes while keeping count of the length, once you hit the end, assign that nodes next value to the head value (also set the length count and make isLoop true). Then keep going through the nodes until you find the node that is suppose to be the new end (you find this by counting from the new head one to the length of the nodes). There you make the head.next value the resultHead to return and then set it to null. Return the head to break the while loop.

------Time complexity------
O(N) - Need to loop through the nodes less than two times so time is 2N -> N

------Space complexity------
O(1) - No extra space is used throughout the function
*/

//------------Solution------------------
const rotateList = (head, k) => {
  if (!head) return null;
  if (k === 0) return head;

  let resultHead = head;
  let nodeLength = 0;
  let count = 0;
  let isLoop = false;

  while (true) {
    count++;

    if (!head.next) {
      head.next = resultHead;
      nodeLength = count;
      isLoop = true;

      k = k % nodeLength;
    } else if (k === nodeLength && isLoop) {
      resultHead = head.next;
      head.next = null;
      return resultHead;
    }

    if (nodeLength) {
      k++;
    }

    head = head.next;
  }
};

//------------Solution Check------------------
class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const e = new ListNode(5, null);
const d = new ListNode(4, e);
const c = new ListNode(3, d);
const b = new ListNode(2, c);
const a = new ListNode(1, b);

const solutionCheck = node => {
  const results = [];

  while (node) {
    results.push(node.val);
    node = node.next;
  }

  console.log(results);
};

solutionCheck(rotateList(a, 17));
