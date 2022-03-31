function detectLoop(node) {
  const hashTable = Array(128).fill(null);

  while (node) {
    const index = node.value.charCodeAt();
    const hashNode = new Node(node);

    if (!hashTable[index]) hashTable[index] = hashNode;
    else {
      const isIntersection = hashCheck(hashTable[index], node);
      if (isIntersection) return isIntersection;

      hashNode.next = hashTable[index];
      hashTable[index] = hashNode;
    }

    node = node.next;
  }

  return false;
}

function hashCheck(tableNode, newNode) {
  while (tableNode) {
    if (tableNode.value === newNode) return newNode;
    tableNode = tableNode.next;
  }

  return false;
}

//Tests
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const trueCheck = () => {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = b;

  console.log(detectLoop(a));
};

const falseCheck = () => {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");

  a.next = b;
  b.next = c;
  c.next = d;

  console.log(detectLoop(a));
};

trueCheck(); // true;
falseCheck(); // false

//Time: O(n) - need to go through all the nodes once in the worst case
//Space: O(1) - hashtable size remains the same with input size
