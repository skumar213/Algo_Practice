class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class AnimalShelter {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(item) {
    const node = new Node(item);

    if (this.tail) {
      node.next = this.tail;
      this.tail.prev = node;
    }

    this.tail = node;

    if (!this.head) this.head = node;
  }

  dequeueAny() {
    if (!this.head) return "Empty Queue";

    const rmItem = this.head;
    this.head = this.head.prev;

    if (this.head) {
      this.head.next = null;
    } else {
      this.tail = null;
    }

    return rmItem;
  }

  dequeueDog() {
    if (!this.head) return "Empty Queue";

    let rmItem = this.head;

    while (rmItem) {
      if (rmItem.value.includes("dog")) break;
      rmItem = rmItem.prev;
    }

    if (!rmItem) return { value: "No Dogs left" };

    if (rmItem === this.head) {
      return this.dequeueAny();
    } else if (rmItem === this.tail) {
      this.tail = this.tail.next;
      return rmItem;
    } else {
      rmItem.prev.next = rmItem.next;
      rmItem.next.prev = rmItem.prev;
      return rmItem;
    }
  }

  dequeueCat() {
    if (!this.head) return "Empty Queue";

    let rmItem = this.head;

    while (rmItem) {
      if (rmItem.value.includes("cat")) break;
      rmItem = rmItem.prev;
    }

    if (!rmItem) return { value: "No Cats left" };

    if (rmItem === this.head) {
      return this.dequeueAny();
    } else if (rmItem === this.tail) {
      this.tail = this.tail.next;
      return rmItem;
    } else {
      rmItem.prev.next = rmItem.next;
      rmItem.next.prev = rmItem.prev;
      return rmItem;
    }
  }
}

//Tests
const queue = new AnimalShelter();

queue.enqueue("dog1");
queue.enqueue("dog2");
queue.enqueue("dog3");
queue.enqueue("cat1");
queue.enqueue("cat2");
queue.enqueue("cat3");

console.log(queue.dequeueCat().value);

let ans = queue.tail;
let ansArr = [];

while (ans) {
  ansArr.push(ans.value);
  ans = ans.next;
}

console.log(ansArr);
