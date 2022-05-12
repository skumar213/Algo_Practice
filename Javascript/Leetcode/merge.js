//https://leetcode.com/problems/merge-sorted-array/solution/

var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p3 = nums1.length - 1;

  if (p1 < 0) {
    nums1[0] = nums2[0];
  }

  for (let i = nums1.length - 1; i > 0; i--) {
    if (nums2[p2] > nums1[p1] || p1 < 0) {
      nums1[p3] = nums2[p2];
      p2--;
      p3--;
    } else {
      nums1[p3] = nums1[p1];
      p1--;
      p3--;
    }
  }

  if (p2 >= 0) {
    nums1[0] = nums2[0];
  }
};

//Time: O(n + m) - the length of nums1 is n + m
//Space: O(1) - no extra space was used
