function palPermCheck(word) {
  word = word.toLowerCase();

  //assume the english alphabet in all lowercase
  const boolArray = Array(26).fill(0);

  //increments if letter is found at an odd interval and decrements if its at an even interval
  //ex: first time a letter is found it will increment and then second time it will decremete
  for (let char of word) {
    const index = char.charCodeAt() - 97;
    if (index < 0 || index > 25) continue; //skips any non-characters

    if (boolArray[index] === 0) boolArray[index]++;
    else boolArray[index]--
  }

  //if its a palendrom it will add up to 0 (even length) or 1 (odd length)
  const sum = boolArray.reduce((accu, num) => accu + num, 0)

  return sum === 0 || sum === 1
}

//Tests
const word = 'Tactcoa papa'
console.log(palPermCheck(word))


//------------Space and Time Complexity-----------
//Space: O(1) - the array size is constant
//Time: O(n) - have to iterate through the length of the word
