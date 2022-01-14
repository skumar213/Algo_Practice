/*
------Prompt------
Given a string, return an array of all the permutations of that string. The permutations of the string should be the same length as the original string (i.e. use each letter in the string exactly once) but do not need to be actual words.

The array that is returned should only contain unique values and its elements should be in alphabetical order.

------Examples------
stringPerm('one') -> [ 'eno', 'eon' 'neo', 'noe', 'oen', 'one']



------Solution------
-Take full word and check by recursivley checking if the first 3 letters are still what are the option, then 2, then 1



------Time complexity------
O() -

------Space complexity------
O() -




one

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
  word = word.split("")
  let results = [word.shift()];

  function getWords(word, tmpResults = []) {
    if (!results.length) {
      results.push(...tmpResults);
      tmpResults.splice(0);
    }

    if (!word.length) {
      return
    }

    const currentWord = results.pop();
    const currentLetter = word.shift();

    for (let j = 0; j <= currentWord.length; j++) {
      let wordCopy = currentWord.split("");
      wordCopy.splice(j, 0, currentLetter);
      wordCopy = wordCopy.join("");

      if (!tmpResults.includes(wordCopy)) {
        tmpResults.push(wordCopy);
      }
    }

    if (results.length) {
      word.unshift(currentLetter)
      getWords(word, tmpResults);
    } else {
      getWords(word, tmpResults)
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
