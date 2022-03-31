function intersection(n1, n2) {
  const hashTable = Array(128).fill(null);

  while (n1) {
    const index = n1.value.charCodeAt();
    const hashNode = new Node(n1);

    if (!hashTable[index]) hashTable[index] = hashNode;
    else {
      hashNode.next = hashTable[index];
      hashTable[index] = hashNode;
    }

    n1 = n1.next;
  }

  while (n2) {
    const index = n2.value.charCodeAt();
    if (hashTable[index]) {
      const isIntersection = hashCheck(hashTable[index], n2);
      if (isIntersection) return isIntersection;
    }

    n2 = n2.next;
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

  const a2 = new Node("a");
  const b2 = new Node("b");

  //list 1
  a.next = b;
  b.next = c;
  c.next = d;

  //list 2
  a2.next = b2;
  b2.next = c;

  console.log(intersection(a, a2));
};

const falseCheck = () => {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");

  const a2 = new Node("a");
  const b2 = new Node("b");
  const c2 = new Node("c");
  const d2 = new Node("d");

  //list 1
  a.next = b;
  b.next = c;
  c.next = d;

  //list 2
  a2.next = b2;
  b2.next = c2;
  c2.next = d2;

  console.log(intersection(a, a2));
};

trueCheck(); // true;
falseCheck(); // false

//Time: O(n + m) - need to go through all the nodes once in the worst case
//Space: O(1) - hashtable size remains the same with input size
