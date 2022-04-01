class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prevMin = null;
  }
}

class Stack {
  constructor() {
    this.stack = null;
  }

  push(item) {
    const node = new StackNode(item);

    if (this.stack === null) {
      node.prevMin = node.value;
    } else {
      if (this.stack.prevMin < node.value) {
        node.prevMin = this.stack.prevMin;
      } else {
        node.prevMin = node.value;
      }
    }

    node.next = this.stack;
    this.stack = node;
  }

  pop() {
    if (this.stack === null) return "Empty Stack";

    const removedItem = this.stack;
    this.stack = this.stack.next;

    return removedItem;
  }

  peek() {
    if (this.stack === null) return "Empty Stack";
    return this.stack;
  }

  isEmpty() {
    return this.stack === null;
  }

  min() {
    if (this.stack === null) return "Empty Stack";

    return this.stack.prevMin;
  }
}

//Test
const stack = new Stack();

stack.push(3);
stack.push(2);
stack.push(1);

stack.pop();
// stack.pop();
// stack.pop();

console.log(stack.min());
console.log(stack.peek());
