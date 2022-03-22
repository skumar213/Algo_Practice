function stringReplace(arr, trueLength) {
  const spacesCount = countTrueSpaces(arr, trueLength); // O(l)

  //gets the index of the full length of the string. everything after is uneeded space
  let trueEndIndex = trueLength + spacesCount * 2 - 1;

  //replace uneeded space with null so it doesn't get used
  if (arr.length > trueEndIndex + 1) {
    for (let i = trueEndIndex + 1; i < arr.length; i++) {
      //array length - true end index (e - (l + s))
      arr[i] = null;
    }
  }

  //trueEndIndex keeps track of where to shift the items to
  //currIndex keeps track of the current item to be evauluated
  for (let currIndex = trueLength - 1; currIndex >= 0; currIndex--) {
    //O (l)
    //replaces the array index right after the last letter, thats why its backwards
    if (arr[currIndex] === " ") {
      arr[trueEndIndex] = "0";
      arr[trueEndIndex - 1] = "2";
      arr[trueEndIndex - 2] = "%";
      trueEndIndex -= 3;
    }
    //moves the current letter to the end
    else {
      arr[trueEndIndex] = arr[currIndex];
      trueEndIndex--;
    }
  }

  return arr.join("");
}

function countTrueSpaces(word, length) {
  let count = 0;

  for (let i = 0; i < length; i++) {
    if (word[i] === " ") count++;
  }

  return count;
}





//Tests
const word = "Mr John Smith     ";
console.log(stringReplace(word.split(""), 13));

//-----------Space and Time Complexity------------
//Space: O(1) - items are replaced in space and no extra space is used
//Time: O(l + (e-(l-s))) - has to iterate to the truelength (l) and any additional unused spaces at the end
// l = trueLength, e - trueEndIndex, s = spaces count
