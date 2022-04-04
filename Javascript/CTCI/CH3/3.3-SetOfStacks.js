class SetOfStacks {
  constructor(limit) {
    this.stack = [];
    this.limit = limit;
  }

  push(item) {
    if (
      this.stack.length === 0 ||
      this.stack[this.stack.length - 1].length === this.limit
    ) {
      this.stack.push([item]);
    } else {
      this.stack[this.stack.length - 1].push(item);
    }
  }

  pop() {
    if (this.stack.length === 0) return "Empty Stack";

    const rmItem = this.stack[this.stack.length - 1].pop();

    if (this.stack[this.stack.length - 1].length === 0) this.stack.pop();
    return rmItem;
  }

  peek() {
    if (this.stack.length === 0) return "Empty Stack";
    return this.stack[this.stack.length - 1][
      this.stack[this.stack.length - 1].length - 1
    ];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

const stack = new SetOfStacks(2);

stack.push(1);
stack.push(2);

stack.push(3);
stack.push(4);

stack.push(5);
stack.push(6);

stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();

console.log(stack.peek());
console.log(stack.isEmpty());
