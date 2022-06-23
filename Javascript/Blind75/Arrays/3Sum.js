//https://leetcode.com/problems/3sum/

var threeSum = function(nums) {
  const ans = [];

  nums.sort((a,b) => a-b)

  for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i-1]) continue;

      let start = i + 1;
      let end = nums.length - 1;

      while (start < end) {
          const sum = nums[i] + nums[start] + nums[end];

          if (sum === 0) {
              ans.push([nums[i], nums[start], nums[end]])
              start++
              end--

              while (nums[start - 1] === nums[start]) start++
              while (nums[end] === nums[end + 1]) end--

          } else if (sum > 0) {
              end--
          } else {
              start++
          }
      }
  }

  return ans;
};


/*
Time: O(n^2) - the first for loop goes through nums once and then the while loop goes through it again for each iteration of the for loop
Space: O(?) - its the time the sorting algo takes. It could range fron log n to n
*/


/*
Trick/Pattern

For these sum type problems you use a for loop for the first few and then for the last on you use the two pointer approach with a start and end pointer. Input needs to be sorted. To only have unique values, for the for loops make sure the first one is checked and then check if the current matches the previous and then skip. In the while loop once a match is found, iterate start and ends once and then keep going until the start no longer matches its prev and end no longer matches its next

*/
