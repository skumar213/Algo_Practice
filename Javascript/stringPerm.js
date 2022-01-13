/*
------Prompt------
Given a string, return an array of all the permutations of that string. The permutations of the string should be the same length as the original string (i.e. use each letter in the string exactly once) but do not need to be actual words.

The array that is returned should only contain unique values and its elements should be in alphabetical order.

------Examples------
stringPerm('one') -> [ 'eno', 'eon' 'neo', 'noe', 'oen', 'one']
3-6, 2-2

one, neo, oen
noe, eno
eon


ab, ba

[
  'fhis', 'fhsi', 'fihs',
  'fish', 'fshi', 'fsih',
  'hfis', 'hfsi', 'hifs',
  'hisf', 'hsfi', 'hsif',
  'ifhs', 'ifsh', 'ihfs',
  'ihsf', 'isfh', 'ishf',
  'sfhi', 'sfih', 'shfi',
  'shif', 'sifh', 'sihf'
]

need to go through it 16 (n^n) times
but only 12 (n^(n-1)) are correct

2 and less are different


------Solution------

-Take current string and push it array (making sure its not already there)
-call the function again but change the letters as the input




------Time complexity------
O() -

------Space complexity------
O() -
*/

//------------Solution------------------

//Iterative solution
const stringPermIter = (word) => {
  const history = {};
  let count = 0

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (!history[word]) {
        history[word] = true
      }

      word = word.slice(1) + word[0]

      if (j === word.length - 1 && count !== word.length - 1) {
        const wordArr = word.split("");

        wordArr[count] = word[count + 1];
        wordArr[count + 1] = word[count]

        word = wordArr.join('')

        count++
      }
    }
  }

  return Object.keys(history).sort()
}

//Recursive solution




//------------Solution Check------------------

//Iterative Check
// console.log(stringPermIter('fish'))
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
// console.log(stringPermIter('one'))
// // [ 'eno', 'eon' 'neo', 'noe', 'oen', 'one']
// console.log(stringPermIter('app'))
// // [ 'app','pap','ppa']
// console.log(stringPermIter('aa'))
// // ['aa']

