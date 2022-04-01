class QueueArray {
  constructor() {
    this.queue = [];
    this.first = null;
    this.last = null;
  }

  add(item) {
    this.queue.unshift(item);
    if (this.first === null) {
      this.first = item;
    }

    this.last = item;
  }

  remove() {
    if (this.first === null) return "Empty Queue";

    const removedItem = this.queue.pop();
    this.first =
      this.queue.length > 0 ? this.queue[this.queue.length - 1] : null;

    if (this.first === null) {
      this.last = null;
    }

    return removedItem;
  }

  peek() {
    if (this.first === null) return "Empty Queue";
    return this.first;
  }

  isEmpty() {
    return this.first === null;
  }
}

const queue = new QueueArray();

queue.add(1);
queue.add(2);
queue.add(3);

queue.remove();
queue.remove();
queue.remove();

console.log(queue.isEmpty());
console.log(queue.queue);

/*
1) A queue uses FIFO (first-in first-out). Items are removed from the data structure in the same order that they are added. A line to the movies analogy.
2) Methods
    1) add(item): Add an item tot he end of the queue
    2) remove(): Remove the first item in the queue
    3) peek(): Return the top of the queue
    4) isEmpty(): Return true if and only if the queue is empty
3) Can also be implimented with a linked list
4) Queues are used in breadth-first search or in implimenting a cache
*/
