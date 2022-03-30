function sumListFor(n1, n2) {
  let ans = "";
  let n1Copy = n1;
  let n2Copy = n2;
  let n1Count = 0;
  let n2Count = 0;

  while (n1Copy) {
    n1Count++;
    n1Copy = n1Copy.next;
  }
  while (n2Copy) {
    n2Count++;
    n2Copy = n2Copy.next;
  }

  let difference = n1Count - n2Count;

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

    const n1Value = n1 ? n1.value : 0;
    const n2Value = n2 ? n2.value : 0;

    const sum = n1Value + n2Value + remainder;
    const currentValue = sum < 10 ? sum.toString() : sum.toString()[1];
    remainder = sum < 10 ? 0 : parseInt(sum.toString()[0], 10);

    ans = currentValue + ans;

    return remainder;
  }

  const remainder = findSum(n1, n2);

  return parseInt(remainder + ans, 10);
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

  console.log(sumListFor(seven, five));
};

//tests 921  + 76  = 997
const testTwo = () => {
  nine.next = two;
  two.next = one;

  seven.next = six;

  console.log(sumListFor(nine, seven));
};

//tests 5921 + 76  = 5997
const testThree = () => {
  five.next = nine;
  nine.next = two;
  two.next = one;

  seven.next = six;

  console.log(sumListFor(five, seven));
};

// testOne(); // 1308
// testTwo(); // 997
testThree(); // 5997

//Time: O(n) - n being the longer linked-list
//Space: (n) - at worst you'll have to make n fake nodes
