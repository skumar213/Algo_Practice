class StackArray {
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

class MyQueue {
  constructor() {
    this.stackOne = new StackArray();
    this.stackTwo = new StackArray();
  }

  add(item) {
    while (!this.stackOne.isEmpty()) {
      const rmItem = this.stackOne.pop();
      this.stackTwo.push(rmItem);
    }

    this.stackOne.push(item);

    while (!this.stackTwo.isEmpty()) {
      const rmItem = this.stackTwo.pop();
      this.stackOne.push(rmItem);
    }
  }

  remove() {
    if (this.stackOne.isEmpty()) return "Empty Stack";

    const rmItem = this.stackOne.pop();
    return rmItem;
  }
}

const queue = new MyQueue();

queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);
queue.add(5);

console.log(queue.remove()); // 1
console.log(queue.stackOne);
