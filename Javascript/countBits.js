/*
------Prompt------
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.


------Examples------
-Inputs & Outputs
inputs = an integet
output = an array that counts the number of 1's in each digits binary equivalent from 0 to n.

-Edge Cases
if n is 0 = [0];
n will always be positive


-Examples
countBits(2) = [0,1,1]
countBits(5) = [0,1,1,2,1,2]

------Solution------
For loop from 0 to n
  for each number convert it to binary and count the 1s
  then push up to the ans array

Use a helper function to count the bits using the bitwise operators. It uses a trick to count the number of ones. The &= operator will compare the binary equivalent of two numbers (n and n-1 )by checking to the two and returning a 1 for which the corresponding bits of both operands are 1's. Then this is converted back to its decimal form and becomes x. This works because it converts the least-significant (right most) bit of the current number to it's opposite. You can only do this for the number of total one's per digit.


------Time complexity------
O(N) - countBits will have to loop through 0 to n = O(N). getCount will at most have to do 32 iterations for a 32-bit number. In the worst case (if the digit is all 1's) it won't go over 32, therefore making it O(1)

------Space complexity------
O(1) - The output array doesn't count towards the space compexity.
*/

//------------Solution------------------
//Test all inputs before testing

const countBits = n => {
  const ans = [];

  for (let i = 0; i <= n; i++) {
    const bitCount = getCount(i);

    ans.push(bitCount);
  }

  return ans;
};

const getCount = x => {
  let count;
  for (count = 0; x !== 0; count++) {
    x &= x - 1;
  }

  return count;
};

//------------Solution Check------------------
console.log(countBits(2)); // [0,1,1]
console.log(countBits(5)); // [0,1,1,2,1,2]
