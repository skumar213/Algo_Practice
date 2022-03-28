//Finds the kth element from the end in a linked list

function kthToLast(head, k) {
  let head2 = head;

  //get the k - 1 element from the head
  for (let i = 1; i < k; i++) {
    head2 = head2.next; //2
    if (!head2) return "too short";
  }

  while (head2.next) {
    head = head.next;
    head2 = head2.next;
  }

  return head.value;
}

//Test
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);

one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;

console.log(kthToLast(one, 3)); //4
console.log(kthToLast(one, 13)); //too short
console.log(kthToLast(one, 6)); //1

//Time: O(n) - goes through all nodes
//Space: O(1) - no space is used
