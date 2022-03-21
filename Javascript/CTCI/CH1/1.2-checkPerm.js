function checkPerm(w1, w2) {
  if (w1.length !== w2.length) return false;

  const table = Array(128).fill(0)

  for (let char of w1) {
    table[char.charCodeAt()]++
  }

  for (let char of w2) {
    table[char.charCodeAt()]--;

    if (table[char.charCodeAt()] < 0) {
      return false
    }
  }


  return true

}

//Tests
console.log(checkPerm('ad', 'da')) // True
console.log(checkPerm('ad', 'ba')) // False


/*
--------Time and space compexity-----

Time: O(n) - only has to iterate through each word once and they will both be the same length
Space: O(1) - the array will always be 128 characters regardless of input size
*/

