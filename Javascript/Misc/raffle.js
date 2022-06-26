class Raffle {
  constructor() {
    this.users = {};
    this.names = [];
  }

  add(user) {
    const [name, email, phone, address] = user;

    this.names.push(name);

    const index = this.names.length - 1;

    this.users[name] = { email, phone, address, index };
  }

  remove(name) {
    const nameIndex = this.users[name].index;
    const lastIndex = this.names.length - 1;
    const lastVal = this.names[lastIndex];

    this.users[lastVal].index = nameIndex;
    this.names[nameIndex] = lastVal;

    this.names.pop();
    delete this.users[name];
  }

  getRan() {
    const index = Math.floor(Math.random() * this.names.length);

    return this.names[index];
  }
}

const raffle = new Raffle();

raffle.add(["jim", "t", "t", "t"]);
raffle.add(["tom", "t", "t", "t"]);
raffle.add(["bob", "t", "t", "t"]);
raffle.add(["asdf", "t", "t", "t"]);
raffle.add(["fds", "t", "t", "t"]);
raffle.remove("bob");

console.log(raffle.names);

console.log(raffle.getRan());
