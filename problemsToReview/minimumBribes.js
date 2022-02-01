/*
[2,1,5,4,3] = 4
[1,0,4,3,2]


https://www.hackerrank.com/challenges/new-year-chaos
*/

const minBribes = queue => {
  let moves = 0;
  queue = queue.map(num => num - 1); //makes all numbers the same as their original index. 1 = 0

  for (let i = 0; i < queue.length; i++) {
    if (queue[i] - i > 2) {
      //original index of number in q - current index. checks if it moves more than two spaces
      console.log("Too chaotic");
      return;
    }

    for (let j = queue[i] - 1; j <= i - 1; j++) {
      // j starts as the position behind the number's original position, as long as its <= the current index - 1
      // console.log(queue[i] - 1, i - 1, '-', i)

      if (queue[j] > queue[i]) {
        moves++;
      }
    }
  }

  // console.log(moves)
};

//i = 3/ j = 1, condition:  2 -> you're checking from behind the original spot to the original spot
//then check if the item at j is greater than the current item. if it is then the current person took a bribe
//This checks how many bribes a single person took

//------------Solution Check------------------
// minBribes([1,2,4,3,5]) //1
// minBribes([5,4,3,2,1]) //too chaotic
// minBribes([2,1,5,3,4]) //3
// minBribes([2,3,4,5,1]) //4
minBribes([2, 1, 5, 4, 3]); //4
// minBribes([1, 2, 5, 3, 7, 8, 6, 4]); // 7
