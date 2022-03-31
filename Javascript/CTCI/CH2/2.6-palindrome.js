function listPal(node) {
  let head = node;
  let tail = null;
  let p1 = 1; //first element
  let p2 = 0; //last element

  while (node) {
    node.prev = tail;
    tail = node;
    p2++;
    node = node.next;
  }

  while (p1 < p2) {
    if (head.value.toLowerCase() !== tail.value.toLowerCase()) return false;

    delete head.prev; //to keep the linked-list in its original form
    head = head.next;
    tail = tail.prev;
    delete tail.next.prev; //to keep the linked-list in its original form

    p1++;
    p2--;
  }

  return true;
}

//Tests
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//checks odd word count
const oddCheck = bool => {
  const r = new Node("r");
  const a = new Node("a");
  const c = new Node("c");
  const e = new Node("e");
  const c2 = new Node("c");
  const a2 = new Node("a");
  const r2 = new Node("r");

  r.next = a;
  a.next = c;
  c.next = e;
  e.next = c2;
  c2.next = a2;
  a2.next = bool ? r2 : null;

  console.log(listPal(r));
};

//checks even word count
const evenCheck = bool => {
  const a = new Node("a");
  const a2 = new Node("a");
  const a3 = new Node("a");
  const a4 = bool ? new Node("a") : new Node("b");

  a.next = a2;
  a2.next = a3;
  a3.next = a4;

  console.log(listPal(a));
};

//checks for single node
const singleCheck = () => {
  const a = new Node("a");

  console.log(listPal(a));
};

//oddCheck and evenCheck takes a single argument that indicates if the input should be a palindrome or not in order to check both resutls
oddCheck(true);
evenCheck(true);
singleCheck();

//Time: O(n) - have to loop through the whole list to get the length and set the tail pointers
//Space: O(1) - no extra space is used
