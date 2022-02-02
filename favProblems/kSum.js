const anySum = (arr, target, k) => {
  arr.sort((a, b) => a - b);

  const twoSum = (arr, target) => {
    const tmpResults = [];
    let p1 = 0;
    let p2 = arr.length - 1;

    while (p1 < p2) {
      const currentSum = arr[p1] + arr[p2];

      if (currentSum === target) {
        tmpResults.push([arr[p1], arr[p2]]);

        p1++;
        p2--;
      } else if (currentSum > target) {
        p2--;
      } else if (currentSum < target) {
        p1++;
      }
    }

    return tmpResults;
  };

  const ksum = (arr, target, k) => {
    const ans = [];


    if (k === 2) {
      return twoSum(arr, target);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const currentNum = arr[i];

        const tmpResults = ksum(arr.slice(i+1), target - currentNum, k - 1);

        if (tmpResults.length) {
          for (let nums of tmpResults) {
            nums.unshift(currentNum);

            ans.push(nums);
          }
        }
      }
    }

    return ans;
  };

  return ksum(arr, target, k);
};


console.log(anySum([1, 0, -1, 0, -2, 2], 0, 4)); // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// console.log(anySum([2, 2, 2, 2, 2], 8)); // [[2,2,2,2]]


//Still need to make sure the ans array only has unique items
