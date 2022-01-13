/*
------Prompt------
Given a string, return an array of all the permutations of that string. The permutations of the string should be the same length as the original string (i.e. use each letter in the string exactly once) but do not need to be actual words.

The array that is returned should only contain unique values and its elements should be in alphabetical order.

------Examples------
stringPerm('one') -> [ 'eno', 'eon' 'neo', 'noe', 'oen', 'one']

one, neo, oen
noe, eno
eon

one
oen
noe
neo
eon
eno

fish, ishf, shfi, hfis
ifsh, fshi, shif, hifs
sifh, ifhs, fhsi, hsif
hisf, isfh, sfhi, fhis

fish
fihs
fshi
fsih
fhis
fhsi
----

fish

fihs

fshi
fsih

fhis
fhsi




------Solution------
-Take full word and check by recursivley checking if the first 3 letters are still what are the option, then 2, then 1



------Time complexity------
O() -

------Space complexity------
O() -




one

*/
//------------Solution------------------


const stringPerm = (word) => {
  results = [];

  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      result.push(word[i])
    } else {
      results.map((num, index) => {
        if (index = word.length - 1) {
          return num + word[i]
        } else {
          return word[i] + num
        }


      })
    }





  }


}






//------------Solution Check------------------

//Iterative Check
console.log(stringPerm('fish'))
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
// console.log(stringPerm('one'))
// // [ 'eno', 'eon' 'neo', 'noe', 'oen', 'one']
// console.log(stringPerm('app'))
// // [ 'app','pap','ppa']
// console.log(stringPerm('aa'))
// // ['aa']

