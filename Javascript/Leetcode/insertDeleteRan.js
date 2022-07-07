//https://leetcode.com/problems/insert-delete-getrandom-o1/

class RandomizedSet{
  constructor() {
      this.hashSet = {}
      this.set = []
  }

  insert(val) {
      if (val in this.hashSet) return false;

      this.set.push(val)

      const currValIndex = this.set.length - 1
      this.hashSet[val] = currValIndex

      return true
  }

  remove(val) {
      if (val in this.hashSet) {
          const currIndex = this.hashSet[val];
          const lastVal = this.set[this.set.length - 1]

          this.hashSet[lastVal] = currIndex
          this.set[currIndex] = lastVal

          delete this.hashSet[val]
          this.set.pop()

          return true
      }

      return false
  }

  getRandom() {
      const index = Math.floor(Math.random() * this.set.length);

      return this.set[index]
  }


}


/*
Time: O(1) - all items will use constant time
Space: O(n) - to store all the elements
*/


/*
Trick/Pattern

Use both a hash table and an array to keep track of the elements. In the hash table add the property of the elements index in the array. Then when you need to remove an element from the array you can use the index to swap it with the last item in the array and then pop it.

*/
