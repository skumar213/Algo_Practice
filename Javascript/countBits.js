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
countBits 5 = [0,1,1,2,1,2]

------Solution------
For loop from 0 to n
  for each number convert it to binary and count the 1s
  then push up to the ans array


------Time complexity------
O(N Log N) -

------Space complexity------
O(M) - The output array doesn't count towards the space compexity but the helper function creates a string the length of the numbers binary equivalent
*/

//------------Solution------------------
//Test all inputs before testing

const countBits = (n) => {
  const ans = [];

  for (let i = 0; i <= n; i++) {
    const bitCount = getCount(i);

    ans.push(bitCount);
  }

  return ans
}



const getCount = (i) => {
  const newBit = i.toString(2)
  let count = 0;

  for (let bit of newBit) {
    count += parseInt(bit)
  }

  return count;
}

//------------Solution Check------------------
console.log(countBits(5))



/*
const getCount = (i) => {
  const newBit = i.toString(2)
  let count = 0;

  for (let bit of newBit) {
    count += parseInt(bit)
  }

  return count;
}



*/
