function detectLoop(node) {
  let slow = node.next;
  let fast = node.next ? node.next.next : null;

  while (slow && fast) {
    if (slow === fast) break;

    slow = slow.next;
    fast = fast.next ? fast.next.next : null;
  }

  if (!slow || !fast) return false;

  slow = node;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
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
  const e = new Node("e");
  const f = new Node("f");
  const g = new Node("g");

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  f.next = g;
  g.next = c;

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

trueCheck(); // node c;
falseCheck(); // false

//Time: O(n) - need to go through all the nodes
//Space: O(1) - no extra space is used
