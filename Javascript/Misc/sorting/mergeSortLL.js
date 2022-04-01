//In progress


let head;

function findlength(node) {
  let count = -1;

  while (node) {
    count++;
    node = node.next;
  }

  return count;
}

function mergeSortLL(headNode, startIdx, endIdx) {
  if (endIdx === null || endIdx === undefined) {
    endIdx = findlength(headNode);
    head = headNode;
  }

  headNode = head;

  let middleIdx;

  if (startIdx < endIdx) {
    middleIdx = Math.floor((startIdx + endIdx) / 2);

    //this problem is here with these two for loops
    // for (let i = 0; i <= middleIdx; i++) {
    //   if (middleIdx < endIdx && middleNode) middleNode = middleNode.next;
    // }

    for (let i = 0; i < startIdx; i++) {
      if (headNode) headNode = headNode.next;
    }

    //first half
    mergeSortLL(headNode, startIdx, middleIdx);

    //second half
    let middleNode = head;
    for (let i = 0; i <= middleIdx + startIdx; i++) {
      if (middleNode) middleNode = middleNode.next;
    }


    mergeSortLL(middleNode, middleIdx + 1, endIdx);

    //merge both halves
    merge(headNode, middleNode, startIdx, middleIdx, endIdx);
  }

  // let ansArr = []
  // let tmp = head;
  // while (tmp) {
  //   ansArr.push(tmp.value);
  //   tmp = tmp.next;
  // }

  // console.log(ansArr)


}

function merge(headNode, middleNode, startIdx, middleIdx, endIdx) {
  let middleCopy = middleIdx + 1;
  let headCopy = headNode;

  if (headNode && middleNode) console.log(headNode.value, middleNode.value);

  // if (headNode.value === 5 && middleNode.value === 2) {
  //   let ansArr = []
  //   let tmp = head;
  //   while (tmp) {
  //     ansArr.push(tmp.value);
  //     tmp = tmp.next;
  //   }

  //   console.log(ansArr)
  // }


  while (
    startIdx <= middleIdx &&
    middleCopy <= endIdx &&
    headNode &&
    middleNode
  ) {
    if (headNode.value >= middleNode.value) {
      const tmpPrev = middleNode.prev;
      const tmpNext = middleNode.next;
      const tmpHeadPrev = headNode.prev;

      middleNode.prev = headNode.prev;
      middleNode.next = headNode;
      headNode.prev = middleNode;
      headNode.next = tmpNext;
      if (tmpHeadPrev) tmpHeadPrev.next = middleNode;

      if (tmpPrev) tmpPrev.next = tmpNext;
      if (tmpNext) tmpNext.prev = tmpPrev;
      middleNode = tmpNext;

      middleCopy++;
    }
    headNode = headNode.next;
    startIdx++;
  }

  //puts remaining items back into the array in sorted order
  //at this point only one array will be empty so only one while loop will trigger
  // while (middleCopy <= endIdx && headNode && middleNode) {
  //   const tmpPrev = middleNode.prev;
  //   const tmpNext = middleNode.next;
  //   const tmpHeadPrev = headNode.prev;

  //   middleNode.prev = headNode.prev;
  //   middleNode.next = headNode;
  //   headNode.prev = middleNode;
  //   headNode.next = tmpNext;
  //   if (tmpHeadPrev) tmpHeadPrev.next = middleNode;

  //   if (tmpPrev) tmpPrev.next = tmpNext;
  //   if (tmpNext) tmpNext.prev = tmpPrev;
  //   middleNode = tmpNext;

  //   middleCopy++;
  // }

  // while (startIdx < middleIdx && headNode && middleNode) {
  //   const tmpPrev = headNode.prev;
  //   const tmpNext = headNode.next;
  //   const tmpMiddlePrev = middleNode.prev;

  //   headNode.prev = middleNode.prev;
  //   headNode.next = middleNode;
  //   middleNode.prev = headNode;
  //   middleNode.next = tmpNext;
  //   if (tmpMiddlePrev) tmpMiddlePrev.next = headNode;

  //   if (tmpPrev) tmpPrev.next = tmpNext;
  //   if (tmpNext) tmpNext.prev = tmpPrev;
  //   headNode = tmpNext;

  //   startIdx++;
  // }

  //maintains changing node head
  while (headCopy) {
    head = headCopy;
    headCopy = headCopy.prev;
  }
}

//Tests
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

const four = new Node(4);
let one = new Node(1);
const three = new Node(3);
const five = new Node(5);
const two = new Node(2);

four.next = one;
one.prev = four;

one.next = three;
three.prev = one;

three.next = five;
five.prev = three;

five.next = two;
two.prev = five;

mergeSortLL(four, 0);
const ansArr = [];

let ans = one;

while (ans) {
  ansArr.push(ans.value);
  ans = ans.next;
}

console.log(ansArr);
console.log(five);


//I think it the middle node being calculated incorrctly since the head is changing
