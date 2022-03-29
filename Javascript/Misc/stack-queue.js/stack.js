class Stack {
  constructor() {
    this.stack = [];
    this.top = null;
  }

  add(data) {
    this.stack.push(data);
    this.top = data;
  }

  remove() {
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
    if (this.top === null) return true;
    return false;
  }
}

const stack = new Stack();

stack.add(1);
stack.add(2);
stack.add(3);

stack.remove();
stack.remove();
stack.remove();

console.log(stack.isEmpty);
console.log(stack.stack);
