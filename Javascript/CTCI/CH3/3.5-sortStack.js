class Stack {
  constructor() {
    this.stack = [];
    this.top = null;
  }

  push(item) {
    this.stack.push(item);
    this.top = item;
  }

  pop() {
    if (this.top === null) return "Empty Stack";

    const removedItem = this.stack.pop();
    this.top = this.stack.length > 0 ? this.stack[this.stack.length - 1] : null;
    return removedItem;
  }

  peek() {
    if (this.top === null) return "Empty Stack";
    return this.top;
  }

  isEmpty() {
    return this.top === null;
  }
}

function findLength(stack) {
  let count = 0;
  let buffer = new Stack();

  while (!stack.isEmpty()) {
    count++;
    const item = stack.pop();
    buffer.push(item);
  }

  while (!buffer.isEmpty()) {
    const item = buffer.pop();
    stack.push(item);
  }

  return count;
}

function sortStack(stack) {
  const buffer = new Stack();
  let len = findLength(stack);

  for (let i = 0; i < len; i++) {
    let max = -Infinity;

    for (let j = i; j < len; j++) {
      const item = stack.pop();
      if (item >= max) max = item;
      buffer.push(item);
    }

    stack.push(max);

    while (!buffer.isEmpty()) {
      const item = buffer.pop();
      if (item !== max) stack.push(item);
    }
  }
}

//Tests
const stack = new Stack();

stack.push(2);
stack.push(1);
stack.push(3);
stack.push(5);
stack.push(4);

console.log(stack.stack); // [2,1,3,5,4]
sortStack(stack);
console.log(stack.stack); // [5,4,3,2,1]

//Time: O(n^2) - have to go through the stack again for each value to compare
//Space: O(n) - a temporary stack is made
