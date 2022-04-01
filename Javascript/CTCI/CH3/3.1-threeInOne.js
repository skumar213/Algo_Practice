class ThreeStacks {
  constructor() {
    this.stack = [];
    this.oneTop = null;
    this.twoTop = null;
    this.threeTop = null;
  }

  oneAdd(item) {
    this.stack.unshift(item);
    if (this.oneTop === null) this.oneTop = 0;
    if (this.twoTop !== null) this.twoTop++;
    if (this.threeTop !== null) this.threeTop++;
  }

  twoAdd(item) {
    if (this.twoTop === null && this.threeTop === null) {
      this.stack.push(item);
      this.twoTop = this.stack.length - 1;
    } else if (this.twoTop === null && this.threeTop !== null) {
      this.stack.splice(this.threeTop, 0, item);
      this.twoTop = this.threeTop;
      this.threeTop++;
    } else if (this.twoTop !== null) {
      this.stack.splice(this.twoTop, 0, item);
      if (this.threeTop !== null) this.threeTop++;
    }
  }

  threeAdd(item) {
    if (this.threeTop === null) {
      this.stack.push(item);
      this.threeTop = this.stack.length - 1;
    } else {
      this.stack.splice(this.threeTop, 0, item);
    }
  }

  oneRemove() {
    if (this.oneTop === null) return "One is Empty";

    const rmOne = this.stack.shift();
    if (this.twoTop !== null) this.twoTop--;
    if (this.threeTop !== null) this.threeTop--;

    if (
      this.oneTop === this.twoTop ||
      this.oneTop === this.threeTop ||
      this.stack.length === 0
    ) {
      this.oneTop = null;
    }

    return rmOne;
  }

  twoRemove() {
    if (this.twoTop === null) return "Two is Empty";

    const rmTwo = this.stack.splice(this.twoTop, 1);
    if (this.threeTop !== null) this.threeTop--;

    if (this.twoTop === this.threeTop || this.stack.length === 0)
      this.twoTop = null;

    return rmTwo[0];
  }

  threeRemove() {
    if (this.threeTop === null) return "Three is Empty";

    const rmThree = this.stack.splice(this.threeTop, 1);

    if (
      this.stack.length === 0 ||
      (this.stack[this.threeTop] !== 0 && !this.stack[this.threeTop])
    )
      this.threeTop = null;

    return rmThree[0];
  }

  onePeek() {
    if (this.oneTop === null) return "One is Empty";
    return this.stack[this.oneTop];
  }

  twoPeek() {
    if (this.twoTop === null) return "Two is Empty";
    return this.stack[this.twoTop];
  }

  threePeek() {
    if (this.threeTop === null) return "Three is Empty";
    return this.stack[this.threeTop];
  }

  isEmptyOne() {
    return this.oneTop === null;
  }

  isEmptyTwo() {
    return this.twoTop === null;
  }

  isEmptyThree() {
    return this.threeTop === null;
  }
}

const threeStacks = new ThreeStacks();

threeStacks.threeAdd(3);
threeStacks.threeAdd(6);
threeStacks.threeAdd(9);

threeStacks.twoAdd(2);
threeStacks.twoAdd(4);
threeStacks.twoAdd(7);

threeStacks.oneAdd(1);
threeStacks.oneAdd(5);
threeStacks.oneAdd(10);

threeStacks.oneRemove();
threeStacks.oneRemove();
threeStacks.oneRemove();

// threeStacks.twoRemove();
// threeStacks.twoRemove();
// threeStacks.twoRemove();

threeStacks.threeRemove();
threeStacks.threeRemove();
threeStacks.threeRemove();

console.log(threeStacks.onePeek());
console.log(threeStacks.twoPeek());
console.log(threeStacks.threePeek());
console.log(threeStacks.stack);
console.log(threeStacks.oneTop);
console.log(threeStacks.twoTop);
console.log(threeStacks.threeTop);
