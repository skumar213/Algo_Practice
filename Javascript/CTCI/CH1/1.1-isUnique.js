function isUnique(word) {
  if (word.length > 128) return false;

  const letters = Array(128);

  for (let char of word) {
    const index = char.charCodeAt();
    if (letters[index]) return false;
    else letters[index] = char;
  }

  return true;
}

//Tests
console.log(isUnique("abcdefghijklmnopqrstuvwxyz")); //True
console.log(isUnique("abcdefghijklmnopqrstuvwxyza")); //False


/*
----------Time and space compexity-------

Time: O(n) - only has to iterate through the word once
Space: O(1) - the array will always be 128 characters regardless of input size
*/

