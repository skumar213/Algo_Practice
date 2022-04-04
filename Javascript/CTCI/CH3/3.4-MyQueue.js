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
    this.stackNew = new StackArray();
    this.stackOld = new StackArray();
  }

  add(item) {
    this.stackNew.push(item);
  }

  remove() {
    if (this.stackOld.isEmpty() && this.stackNew.isEmpty())
      return "Empty Stack";
    this.shfitStack();

    const rmItem = this.stackOld.pop();
    return rmItem;
  }

  peek() {
    if (this.stackOld.isEmpty() && this.stackNew.isEmpty())
      return "Empty Stack";
    return this.stackOld.peek();
  }

  isEmpty() {
    return this.stackOld.isEmpty() && this.stackNew.isEmpty();
  }

  shfitStack() {
    if (this.stackOld.isEmpty()) {
      while (!this.stackNew.isEmpty()) {
        const item = this.stackNew.pop();
        this.stackOld.push(item);
      }
    }
  }
}

//Test
const queue = new MyQueue();

queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);
queue.add(5);

console.log(queue.remove()); // 1
console.log(queue.peek()); //2
console.log(queue.stackOld, queue.stackNew);

//Time: O(n) - the pop method has to remove all items and then add it back each time
//Space: O(n) - the size of the stack
