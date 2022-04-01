class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class QueueLinkedList {
  constructor() {
    this.queue = null;
    this.last = null;
  }

  add(item) {
    const node = new Node(item);
    node.next = this.queue;

    if (node.next === null) this.last = node;

    this.queue = node;

    if (this.queue !== this.last) {
      this.queue.next.prev = this.queue;
    }
  }

  remove() {
    if (this.queue === null) return "Empty Queue";

    const removedItem = this.last;

    this.last = this.last.prev;
    if (this.last) this.last.next = null;
    else this.queue = null;
  }

  peek() {
    if (this.queue === null) return "Empty Queue";
    return this.last;
  }

  isEmpty() {
    return this.queue === null;
  }
}

const queue = new QueueLinkedList();

queue.add(1);
queue.add(2);
queue.add(3);

queue.remove();
// queue.remove();
// queue.remove();

console.log(queue.isEmpty());
console.log(queue.peek());
