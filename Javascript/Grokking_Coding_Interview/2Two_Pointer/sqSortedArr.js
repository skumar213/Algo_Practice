/*
Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0, 1, 1, 4, 9]

*/

const make_squares = function (arr) {
  const squares = [];
  let front = 0;
  let back = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    const frontSq = arr[front] ** 2;
    const backSq = arr[back] ** 2;

    if (frontSq >= backSq) {
      squares.unshift(frontSq);
      front++;
    } else {
      squares.unshift(backSq);
      back--;
    }
  }

  return squares;
};

//Time: O(n) - goes through the array once
//Space: O(1) - no extra space is used. The squares array is part of the output

/*
Explination
Uses two pointer method

1) Since the input array is already sorted it will compare the squared first element with the squared last element
    and put the >= of the two into the squares array (from the front)
2) Then it will increment/decrement the respective pointers until it has gone through the whole array
*/
