function rmDups(head) {
  const hashTable = Array(100).fill(null);
  let ansHead = head;
  let prevNode = null;

  while (head) {
    const index = head.value % hashTable.length;

    if (!hashTable[index]) {
      head.hashTableNext = null;
      hashTable[index] = head;
      prevNode = head;
    } else {
      let hashNode = hashTable[index];
      let foundDup = false;

      while (hashNode) {
        if (hashNode.value === head.value) {
          prevNode.next = head.next;
          foundDup = true;
          break;
        }
        hashNode = hashNode.hashTableNext;
      }

      if (!foundDup) {
        head.hashTableNext = hashTable[index];
        hashTable[index];
        prev = head;
      }
    }

    head = head.next;
  }

  return ansHead;
}

//Tests
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const oneDup = new Node(1);
const twoDup = new Node(2);
const threeDup = new Node(3);

//testing [1,2,3]
// one.next = two;
// two.next = three;
// let answer = rmDups(one);

//testing [2,3,1,3,2,1]
two.next = three;
three.next = one;
one.next = threeDup;
threeDup.next = twoDup;
twoDup.next = oneDup;
let answer = rmDups(two);

const ansArr = [];

while (answer) {
  ansArr.push(answer.value);
  answer = answer.next;
}

console.log(ansArr);

//Time: O(n) - makes one pass through the linked list
//Space: O(1) - the hash table will be constant regardless of input size
