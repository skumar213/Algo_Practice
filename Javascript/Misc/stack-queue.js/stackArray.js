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

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.pop();
stack.pop();
stack.pop();

console.log(stack.isEmpty());
console.log(stack.stack);

/*
------Notes-----
1) A stack uses LIFO (last-in first-out) ordering. The most recent item added to the stack sit he first item to be removed. Pancake analogy.
2)Methods:
    1) pop(): Remove the top item from the stack
    2) push(item): Add an item to the top of the stack
    3) peek(): Return the top of the stack
    4) isEmpty(): Return true if and only if the stack is empty
3) Downside is that you no longer have constant time access to items but it does have constant time add/remove.
4) Stacks are good for recursive algorithms. Sometimes you need to push temporary data onto a stack as you recurse, but then remove them as you backtrack.
    1) Can also be used to impliment a recursive algorithm iteratively
5) Can also be implimented as a linked list.
*/
