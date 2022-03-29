class StackNode {
  constructor(value) {
    this.value = value;
    this.prevMin = null;
  }
}

class Stack {
  constructor() {
    this.stack = [];
    this.top = null;
  }

  push(item) {
    const node = new StackNode(item);

    if (this.stack.length === 0) {
      node.min = node.value;
    } else {
      const prevItem = this.stack[this.stack.length - 1];

      if (prevItem.min < node.value) {
        node.min = prevItem.min;
      } else {
        node.min = node.value;
      }
    }

    this.stack.push(node);
    this.top = node;
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

  min() {
    return this.top.min;
  }
}

const stack = new Stack();

stack.push(3);
stack.push(1);
stack.push(2);

stack.pop();
stack.pop();
// stack.pop();

console.log(stack.min());
console.log(stack.stack);


//Working but need to redo it using a linked list instead of an array for the stack
