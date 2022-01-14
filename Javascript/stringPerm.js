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
const stringPermIter = word => {
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

        //loops through each letter of the current word and puts the current letter (from the main word) behind the second half of the word, attaches it in order and then pushes it back to results
        for (let j = 0; j < currentWord.length; j++) {
          const firstHalf = currentWord.slice(0, j);
          const secondHalf = currentWord.slice(j);

          const newWord = firstHalf + word[i] + secondHalf;

          if (!tmpResults.includes(newWord)) {
            tmpResults.push(newWord);
          }

          if (
            j === currentWord.length - 1 &&
            !tmpResults.includes(firstHalf + secondHalf + word[i])
          ) {
            tmpResults.push(firstHalf + secondHalf + word[i]);
          }
        }
      }

      results.push(...tmpResults);
    }
  }

  return results.sort();
};

//Recursive solution
const stringPermRec = word => {
  let results = [word[0]];

  function getWords(word, tmpResults = []) {
    if (!results.length) {
      results.push(...tmpResults);
      tmpResults.splice(0)
      return;
    } else {
      for (let i = 0; i < word.length; i++) {
        // console.log("top",word, results)

        if (results.length === 1 && results[0] === word[0] && i === 0) {
          continue;
        }

        const currentWord = results.pop();


        for (let j = 0; j < currentWord.length; j++) {
          const firstHalf = currentWord.slice(0, j);
          const secondHalf = currentWord.slice(j);

          const newWord = firstHalf + word[i] + secondHalf;

          if (!tmpResults.includes(newWord)) {
            tmpResults.push(newWord);
          }

          if (
            j === currentWord.length - 1 &&
            !tmpResults.includes(firstHalf + secondHalf + word[i])
          ) {
            tmpResults.push(firstHalf + secondHalf + word[i]);
          }
        }

        const currentLetter = word.slice(i, i+1)
        // console.log("bottom",currentWord, currentLetter, results, tmpResults)

        getWords(currentLetter, tmpResults);
      }
    }
  }


  getWords(word);
  return results.sort();


};

//------------Solution Check------------------

//Iterative Check
console.log(stringPermIter("fish"));
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
console.log(stringPermIter("one"));
// // [ 'eno', 'eon' 'neo', 'noe', 'oen', 'one']
console.log(stringPermIter("app"));
// // [ 'app','pap','ppa']
console.log(stringPermIter("aa"));
// // ['aa']



//Recursive Check
console.log(stringPermRec("fish"));
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
console.log(stringPermRec("one"));
// // [ 'eno', 'eon' 'neo', 'noe', 'oen', 'one']
console.log(stringPermRec("app"));
// // [ 'app','pap','ppa']
console.log(stringPermRec("aa"));
// // ['aa']
