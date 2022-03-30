const countNodes = headNode => {
  let count = 0;

  while (headNode) {
    count++;
    headNode = headNode.next;
  }

  return count;
};

function sumListFor(n1, n2) {
  let headNode = null;
  let difference = countNodes(n1) - countNodes(n2);

  function findSum(n1, n2) {
    if (!n1 && !n2) return 0;
    if (difference !== 0) {
      let fakeNode = new Node(0);

      if (difference > 0) {
        fakeNode.next = n2;
        n2 = fakeNode;
        difference--;
      } else {
        fakeNode.next = n1;
        n1 = fakeNode;
        difference++;
      }
    }

    const n1Next = n1 ? n1.next : null;
    const n2Next = n2 ? n2.next : null;
    let remainder = findSum(n1Next, n2Next);

    const sum = n1.value + n2.value + remainder;
    const currentValue = sum < 10 ? sum : parseInt(sum.toString()[1]);
    remainder = sum < 10 ? 0 : parseInt(sum.toString()[0], 10);

    const resultNode = new Node(currentValue);

    if (headNode) {
      resultNode.next = headNode;
    }

    headNode = resultNode;

    return remainder;
  }

  const remainder = findSum(n1, n2);

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

//tests 716 + 592 = 1308
const testOne = () => {
  seven.next = one;
  one.next = six;
  five.next = nine;
  nine.next = two;

  return sumListFor(seven, five);
};

//tests 921  + 76  = 997
const testTwo = () => {
  nine.next = two;
  two.next = one;

  seven.next = six;

  return sumListFor(nine, seven);
};

//tests 5921 + 76  = 5997
const testThree = () => {
  five.next = nine;
  nine.next = two;
  two.next = one;

  seven.next = six;

  return sumListFor(five, seven);
};

let ans;

// ans = testOne(); // 1308
// ans = testTwo(); // 997
ans = testThree(); // 5997

while (ans) {
  console.log(ans.value);
  ans = ans.next;
}

//Time: O(n) - n being the longer linked-list
//Space: (n) - at worst you'll have to make n fake nodes and also the call stack will go n deep
