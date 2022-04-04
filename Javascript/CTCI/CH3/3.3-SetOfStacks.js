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

  popAt(index) {
    if (this.stack.length === 0 || !this.stack[index]) return "Empty Stack";

    const rmItem = this.stack[index].pop();

    if (this.stack[index].length === 0) this.stack.splice(index, 1);
    else {
      const rollOverItems = [];

      while (this.stack[index]) {
        const item = this.stack[index].shift();
        rollOverItems.push(item);

        if (this.stack[index].length === 0) this.stack.splice(index, 1);
      }

      // console.log(rollOverItems)
      // return
      while (rollOverItems.length) {
        const item = rollOverItems.shift();

        this.push(item);
      }
    }

    return rmItem;
  }
}

const stack = new SetOfStacks(2);

stack.push(6);
stack.push(5);

stack.push(4);
stack.push(3);

stack.push(2);
stack.push(1);

stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();

stack.popAt(0);
// stack.popAt(0);

console.log(stack.stack);
console.log(stack.peek());
console.log(stack.isEmpty());
