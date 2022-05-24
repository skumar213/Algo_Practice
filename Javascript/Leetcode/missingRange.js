// https://leetcode.com/problems/missing-ranges/solution/

var findMissingRanges = function (nums, lower, upper) {
  const ans = [];

  if (nums.length === 0) {
    if (lower !== upper) return [`${lower}->${upper}`];
    else return [`${lower}`];
  }

  if (nums[0] > lower) nums.unshift(lower - 1);
  if (nums[nums.length - 1] < upper) nums.push(upper + 1);

  for (let i = 0; i < nums.length - 1; i++) {
    const curr = nums[i];
    const next = nums[i + 1];
    let tmp = "";

    if (next !== curr + 1) {
      tmp += curr + 1;

      if (next - 1 !== curr + 1) {
        tmp += `->${next - 1}`;
      }
    }

    if (tmp !== "") ans.push(tmp);
  }

  return ans;
};

//Time: O(n) - n being the input array
//Space: O(1) - no extra space is used
