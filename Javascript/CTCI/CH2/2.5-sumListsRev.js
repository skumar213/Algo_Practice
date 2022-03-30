function sumListRev(n1, n2) {
  let ans = "";
  let remainder = 0;

  while (n1 || n2) {
    const n1Value = n1 ? n1.value : 0;
    const n2Value = n2 ? n2.value : 0;

    const sum = n1Value + n2Value + remainder;
    const currentValue = sum < 10 ? sum : sum.toString()[1];
    remainder = sum < 10 ? 0 : parseInt(sum.toString()[0]);

    ans = currentValue + ans;

    n1 = n1 ? n1.next : null;
    n2 = n2 ? n2.next : null;
  }

  if (remainder) {
    ans = remainder + ans;
  }

  return parseInt(ans, 10);
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

  console.log(sumListRev(seven, five));
};

//tests 921 (129) + 76 (67) = 196
const testTwo = () => {
  nine.next = two;
  two.next = one;

  seven.next = six;

  console.log(sumListRev(nine, seven));
};

//tests 5921 (1295) + 76 (67) = 1362
const testThree = () => {
  five.next = nine;
  nine.next = two;
  two.next = one;

  seven.next = six;

  console.log(sumListRev(five, seven));
};

// testOne() // 912
// testTwo(); // 196
// testThree(); // 1362

//Time: O(n) - n being the longer linked-list
//Space: (1) - no extra space is used
