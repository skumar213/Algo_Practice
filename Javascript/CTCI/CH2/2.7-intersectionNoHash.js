function intersection(n1, n2) {
  let tailOne = findLength(n1);
  let tailTwo = findLength(n2);

  if (tailOne.node !== tailTwo.node) return false;

  let difference = tailOne.count - tailTwo.count;
  if (difference > 0) {
    while (difference) {
      n1 = n1.next;
      difference--;
    }
  } else if (difference < 0) {
    while (difference) {
      n2 = n2.next;
      difference++;
    }
  }

  while (n1 && n2) {
    if (n1 === n2) return n1;

    n1 = n1.next;
    n2 = n2.next;
  }
}

const findLength = node => {
  let count = 0;

  while (node.next) {
    count++;
    node = node.next;
  }

  return {
    node,
    count: count + 1,
  };
};

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

  //list 1
  a.next = b;
  b.next = c;
  c.next = d;

  //list 2
  a2.next = c;

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

trueCheck(); // node c
falseCheck(); // false

//Time: O(n + m) - need to go through all the nodes once in the worst case
//Space: O(1) - no space is used
