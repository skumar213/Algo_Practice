class PriorityQueue {
  constructor(length) {
    this.q = Array(length + 1); //PQ size + 1 since we're starting from index 1
    this.currentIndex;
  }

  init() {
    this.currentIndex = 0;
  }

  //How this works: when a new item is inserted its checked if its dominates its parent
  //if it does, its swapped with the parent and the process is repeated until it no longer dominates its parent
  insert(item) {
    if (this.currentIndex >= this.q.length - 1) {
      console.log("PQ Overflow");
    } else {
      this.currentIndex++;
      this.q[this.currentIndex] = item;
      this.bubbleUp(this.currentIndex);
    }
  }

  findParent(idx) {
    if (idx === 1) {
      return -1;
    }
    return Math.floor(idx / 2);
  }

  findChild(idx) {
    return idx * 2;
  }

  swap(parentIdx, childIdx) {
    const parent = this.q[parentIdx];
    this.q[parentIdx] = this.q[childIdx];
    this.q[childIdx] = parent;
  }

  bubbleUp(idx) {
    const parentIdx = this.findParent(idx);
    const childIdx = idx;

    if (parentIdx === -1) {
      return;
    }

    if (this.q[parentIdx] > this.q[childIdx]) {
      //swap
      this.swap(parentIdx, childIdx);

      //call it again
      this.bubbleUp(parentIdx);
    }
  }

  //This works by removing the smallest element and swapping it with the last element
  //Then bubbles this element down until it is dominating its children
  extractMin() {
    let min = -1;

    if (this.currentIndex <= 0) {
      console.log("Empty queue");
    } else {
      min = this.q[1];

      this.q[1] = this.q[this.currentIndex];
      this.currentIndex--;
      this.q.pop();
      this.bubbleDown(1);

      return min;
    }
  }

  bubbleDown(idx) {
    let child = this.findChild(idx);
    let minIndex = idx;

    for (let i = 0; i <= 1; i++) {
      if (child + i <= this.currentIndex) {
        if (this.q[minIndex] > this.q[child + i]) {
          minIndex = child + i;
        }
      }
    }

    if (minIndex !== idx) {
      this.swap(idx, minIndex);
      this.bubbleDown(minIndex);
    }
  }
}

function makeHeap(pq, itemsArr) {
  pq.init();

  for (let i = 0; i < itemsArr.length; i++) {
    pq.insert(itemsArr[i]);
  }
}

function heapSort(itemsArr) {
  const pq = new PriorityQueue(itemsArr.length);

  makeHeap(pq, itemsArr);

  for (let i = 0; i < itemsArr.length; i++) {
    itemsArr[i] = pq.extractMin();
  }
  console.log(itemsArr);
}

//Test
heapSort([8, 3, 6, 2, 4, 9, 1, 5, 7]);

//Time: O(n log n) - it takes lg n to reach the bottom of a binary tree and need to do it n times
//Space: O(1) - constant space used

//How it works:
  //When you insert it becomes (each element is setup in the correct order in the priority queue. The parent must dominate its children)
      //[ 1, 3, 2, 5, 4, 9, 6, 8, 7 ]
  //Then 1 is removed and the last element is put in its place
      //[ 7, 3, 2, 5, 4, 9, 6, 8 ]
  //Then it bubbles down to the correct spot
      //[ 2, 3, 6, 5, 4, 9, 7, 8 ]
  //Then keeps repeating the process
