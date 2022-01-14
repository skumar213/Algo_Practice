/*
------Prompt------
Given a string, return an array of all the permutations of that string. The permutations of the string should be the same length as the original string (i.e. use each letter in the string exactly once) but do not need to be actual words.

The array that is returned should only contain unique values and its elements should be in alphabetical order.

------Examples------
stringPerm('one') -> [ 'eno', 'eon' 'neo', 'noe', 'oen', 'one']
stringPerm('app') -> [ 'app','pap','ppa']
stringPerm('aa') -> ['aa']



------Solution------
Iterative
Loop through the word and add the current letter to the front and back of each item in the results array. A temporary array (tmpResults) will keep track of the items as they are being changed and then it will be added to the final results array. The while loop will keep taking items that are currently in the results array and adding the current letter to the front and back of each character until it has gone through the entire word.

Recursive
Use a second function to take the previous most item in the results array and add the first letter of the word to the front and back of each character. If the results array still has items in it, it will call the same function again recursively but with the currentLetter added back to the word so it can keep adding it to the items in the results array. If the results array is empty, it will transfer all the items from the tmp array into the results array and then call itself with the original word minus the first letter. Once the word is empty and all the permutations are added to the results array, the function will return (base case).


------Time complexity------
Iterative and Recursive
O(N!) - You have to go through all the permutations


------Space complexity------
Iterative and Recursive
O(N!) - You have to store all the permutations in an array

*/

//------------Solution------------------
//Iterative solution
const iterStringPerm = word => {
  let results = [];

  //goes through word once
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      //if first letter push it up to results
      results.push(word[i]);
    } else {
      const tmpResults = [];

      //loops through each current word in results array
      while (results.length) {
        const currentWord = results.pop();

        //loops through each letter of the current word and puts the current letter (from the main word) behind and in front of each letter in the currentWord
        for (let j = 0; j <= currentWord.length; j++) {
          let wordCopy = currentWord.split("");
          wordCopy.splice(j, 0, word[i]);
          wordCopy = wordCopy.join("");

          if (!tmpResults.includes(wordCopy)) {
            tmpResults.push(wordCopy);
          }
        }
      }

      results.push(...tmpResults);
    }
  }

  return results.sort();
};

//Recursive solution
const recStringPerm = word => {
  word = word.split("");
  let results = [word.shift()];

  function getWords(word, tmpResults = []) {
    //if word length is zero, means we're done and can return. base case
    if (!word.length) {
      return;
    }

    const currentWord = results.pop();
    const currentLetter = word.shift();

    //loops through each letter of the current word and puts the current letter (from the main word) behind and in front of each letter in the currentWord
    for (let j = 0; j <= currentWord.length; j++) {
      let wordCopy = currentWord.split("");
      wordCopy.splice(j, 0, currentLetter);
      wordCopy = wordCopy.join("");

      if (!tmpResults.includes(wordCopy)) {
        tmpResults.push(wordCopy);
      }
    }

    if (results.length) {
      word.unshift(currentLetter);
      getWords(word, tmpResults);
    } else {
      results.push(...tmpResults);
      tmpResults.splice(0);

      getWords(word, tmpResults);
    }
  }

  getWords(word);
  return results.sort();
};

//------------Solution Check------------------

//Iterative Check
console.log(iterStringPerm("fish"));
/*[
  'fhis', 'fhsi', 'fihs',
  'fish', 'fshi', 'fsih',
  'hfis', 'hfsi', 'hifs',
  'hisf', 'hsfi', 'hsif',
  'ifhs', 'ifsh', 'ihfs',
  'ihsf', 'isfh', 'ishf',
  'sfhi', 'sfih', 'shfi',
  'shif', 'sifh', 'sihf'
]*/
console.log(iterStringPerm("one"));
// [ 'eno', 'eon' 'neo', 'noe', 'oen', 'one']
console.log(iterStringPerm("app"));
// [ 'app','pap','ppa']
console.log(iterStringPerm("aa"));
// ['aa']

//Recursive Check
console.log(recStringPerm("fish"));
/*[
  'fhis', 'fhsi', 'fihs',
  'fish', 'fshi', 'fsih',
  'hfis', 'hfsi', 'hifs',
  'hisf', 'hsfi', 'hsif',
  'ifhs', 'ifsh', 'ihfs',
  'ihsf', 'isfh', 'ishf',
  'sfhi', 'sfih', 'shfi',
  'shif', 'sifh', 'sihf'
]*/
console.log(recStringPerm("one"));
// [ 'eno', 'eon' 'neo', 'noe', 'oen', 'one']
console.log(recStringPerm("app"));
// [ 'app','pap','ppa']
console.log(recStringPerm("aa"));
// ['aa']
