//https://leetcode.com/problems/plus-one/submissions/

//without methods
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;

      if (i === 0) {
        digits.unshift(1);
        break;
      }
    } else {
      digits[i] = digits[i] + 1;
      break;
    }
  }

  return digits;
};

//Time: O(n) - go once through the array
//Space: O(1) - no extra space is used

//with methods
var plusOne = function (digits) {
  const num = BigInt(digits.join("")) + BigInt(1);

  const strArr = String(num).split("");

  const ans = strArr.map(el => parseInt(el, 10));

  return ans;
};

//O(n) - each step takes n time
//O(n) - need to make copies of the original array
