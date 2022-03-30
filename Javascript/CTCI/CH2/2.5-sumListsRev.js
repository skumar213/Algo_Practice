function sumListRev(n1, n2) {
  let remainder = 0;
  let headNode = null;

  while (n1 || n2) {
    const n1Value = n1 ? n1.value : 0;
    const n2Value = n2 ? n2.value : 0;

    const sum = n1Value + n2Value + remainder;
    const currentValue = sum < 10 ? sum : parseInt(sum.toString()[1]);
    remainder = sum < 10 ? 0 : parseInt(sum.toString()[0], 10);

    const resultNode = new Node(currentValue);

    if (headNode) {
      resultNode.next = headNode;
    }

    headNode = resultNode;

    n1 = n1 ? n1.next : null;
    n2 = n2 ? n2.next : null;
  }

  if (remainder) {
    const finaltNode = new Node(remainder);
    finaltNode.next = headNode;
    headNode = finaltNode;
  }

  return headNode;
}

//Tests
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const seven = new Node(7);
const one = new Node(1);
const six = new Node(6);

const five = new Node(5);
const nine = new Node(9);
const two = new Node(2);

//tests 716 (617) + 592 (295) = 912
const testOne = () => {
  seven.next = one;
  one.next = six;
  five.next = nine;
  nine.next = two;

  return sumListRev(seven, five);
};

//tests 921 (129) + 76 (67) = 196
const testTwo = () => {
  nine.next = two;
  two.next = one;

  seven.next = six;

  return sumListRev(nine, seven);
};

//tests 5921 (1295) + 76 (67) = 1362
const testThree = () => {
  five.next = nine;
  nine.next = two;
  two.next = one;

  seven.next = six;

  return sumListRev(five, seven);
};

let ans;

// ans = testOne() // 912
// ans = testTwo(); // 196
ans = testThree(); // 1362

while (ans) {
  console.log(ans.value);
  ans = ans.next;
}

//Time: O(n) - n being the longer linked-list
//Space: (1) - no extra space is used
