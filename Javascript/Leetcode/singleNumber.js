//https://leetcode.com/problems/single-number/

var singleNumber = function (nums) {
  const hashMap = {};

  for (let num of nums) {
    if (hashMap[num] === undefined) {
      hashMap[`${num}`] = num;
    } else {
      delete hashMap[`${num}`];
    }
  }

  console.log(hashMap);
  return Object.values(hashMap)[0];
};

//Time: O(n) - go once throught the array
//Space O(n) - hashMap will use extra space
