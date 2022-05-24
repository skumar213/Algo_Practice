//https://leetcode.com/problems/min-stack/

class MinStack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    if (this.stack.length === 0) {
      this.stack.push({
        val,
        prevMin: val,
      });
    } else {
      const prevMin =
        this.stack[this.stack.length - 1].prevMin < val
          ? this.stack[this.stack.length - 1].prevMin
          : val;

      this.stack.push({
        val,
        prevMin,
      });
    }
  }

  pop() {
    const item = this.stack.pop();

    return item.val;
  }

  top() {
    const top = this.stack[this.stack.length - 1];

    return top.val;
  }

  getMin() {
    const top = this.stack[this.stack.length - 1];

    return top.prevMin;
  }
}

//Time: O(1) - all operations take O(1) time
//Space: O(n) - worse case the stack will be size n
