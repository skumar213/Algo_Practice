/*
---Prompt
Given an array of words and an array of sentences, determine which words are anagrams of each other. Calculate how many sentences can be created by replacing any word with one of its anagrams.


----Example
_wordSet = ['listen', 'silent', 'it', 'is']_
_sentence = 'listen it is silent'_

Determine that _listen_ is an anagram of _silent_. Those two words can be replaced with their anagrams. The four sentences that can be created are：

- listen it is silent
- listen it is listen
- silent it is silent
- silent it is listen

return 4
*/

function hashFn(word) {
  return word.split("").sort().join("");
}

function createHash(wordSet) {
  const hashMap = {};

  for (let word of wordSet) {
    const hash = hashFn(word);

    if (!hashMap[hash]) {
      hashMap[hash] = 1;
    } else {
      hashMap[hash]++;
    }
  }

  return hashMap;
}

function countSentences(wordSet, sentences) {
  const hashMap = createHash(wordSet);
  const ans = [];

  for (let sentence of sentences) {
    let count = 0;

    for (let word of sentence.split(" ")) {
      const hash = hashFn(word);

      if (hashMap[hash] > 1) {
        count += hashMap[hash];
      }
    }

    ans.push(count);
  }

  return ans;
}

//Tests
const wordSet = ["the", "bats", "tabs", "in", "cat", "act"];
const sentences = ["cat the bats", "in the act", "act tabs in"];

console.log(countSentences(wordSet, sentences));

//Time: O(n + m) - have to go through all the words in the word set and then go through all the single words in the sentences
//Space: O(n) - where n is the wordset. For the hashmap that is created
