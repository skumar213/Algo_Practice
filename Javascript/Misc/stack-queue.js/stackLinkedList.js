class Node{
  constructor(value){
    this.value = value;
    this.next = null
  }
}

class StackLinkedList{
  constructor() {
    this.stack = null;
  }

  push(item) {
    const node = new Node(item);
    node.next = this.stack;
    this.stack = node;
  }

  pop() {
    if (this.stack === null) return "Empty Stack";

    const removedNode = this.stack;
    this.stack = this.stack.next;

    return removedNode
  }

  peek() {
    if (this.stack === null) return "Empty Stack";
    return this.stack;
  }

  isEmpty() {
    return this.stack === null;
  }
}

const stack = new StackLinkedList();

stack.push(1);
stack.push(2);
stack.push(3);

stack.pop();
stack.pop();
// stack.pop();

console.log(stack.isEmpty());
console.log(stack.peek());
