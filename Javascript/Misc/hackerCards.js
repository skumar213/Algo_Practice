/*
---Prompt
HackerCards is a trendy new card game. Each type of HackerCard has a distinct ID number greater that or equals to 1, and the cost of each HackerCard equals its ID number. For example, HackerCard 1 costs 1, HackerCard 5 costs 5, and so on.

Leanne already has a collection started. For her birthday, Mike wants to buy her as many cards as he can, but they must cost less than or equals to his budget. He wants to buy one each of some cards she doesn't already have. If he has to make one choice among several, he will always choose the lowest cost option. Determine which cards he will buy.

For example, Leanne's collection = [2, 4, 5] and Mike has d = 7 to spend. He can purchase a maximum of 2 cards, the 1 and the 3 to add to her collection. Two other options he has are 1 and 6 (costs more) or 7(fewer cards, costs more)

----Example
Input:
collections[] = [1,3,4]
d = 7

output: [2,5]
*/

function hackerCards(nums, d) {
  const missingCards = Array(d + 1).fill(false);
  const cards = [];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    missingCards[nums[i]] = true;
  }

  for (let j = 1; j < missingCards.length; j++) {
    if (!missingCards[j] && count + j <= d) {
      count += j;
      cards.push(j);
    }
  }

  return cards;
}

const nums = [1, 3, 4];
const d = 7;

console.log(hackerCards(nums, d)); // [2,5]

//Time: O(m) - m is the missingCard array
//Space: O(m) - the missingCards array takes extra space
