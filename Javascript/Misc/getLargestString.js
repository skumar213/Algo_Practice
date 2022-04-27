/*
---Prompt
Given a string, construct a new string by rearranging the original string and deleting characters as needed. Return the alphabetically largest string that can be constructed respecting a limit as to how many consecutive characters can be the same.

----Example
_s = 'baccc'_
_k = 2_

The largest string, alphabetically, is '_cccba_' but it is not allowed because it uses the character '_c_' more than 2 times consecutively. Therefore, the answer is '_ccbca_'.
*/

function createHashMap(str) {
  const hashMap = Array(26).fill(0);

  for (let char of str) {
    const hash = char.charCodeAt(0) - 97;

    hashMap[hash]++;
  }

  return hashMap;
}

function getLargestString(str, k) {
  const hashMap = createHashMap(str);
  let ans = "";

  for (let i = hashMap.length - 1; i >= 0; i--) {
    if (!hashMap[i]) continue;

    let tmpK = k;
    let tmpI = i;
    let findNext = false;

    while (hashMap[i]) {
      if (hashMap[tmpI] === 0) {
        tmpI--;
        continue;
      } else if (tmpI < 0) {
        break;
      }

      const letter = String.fromCharCode(tmpI + 97);

      while (tmpK && hashMap[tmpI]) {
        ans += letter;
        tmpK--;
        hashMap[tmpI]--;
      }

      if (hashMap[i] > 0) {
        if (findNext) {
          tmpI = i;
          tmpK = k;
          findNext = false;
        } else {
          findNext = true;
          tmpK = 1;
          tmpI--;
        }
      }
    }
  }

  return ans;
}

const str = "zzzzzzxxxzzaabbazza";
const k = 3;

console.log(getLargestString(str, k));

//Time: O(n) - hashMap is constant so how many times it has to go around it just depends on the length of the input
//Space: O(1) - hashMap is constant
