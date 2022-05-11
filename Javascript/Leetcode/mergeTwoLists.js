//https://leetcode.com/problems/merge-two-sorted-lists/submissions/


var mergeTwoLists = function(list1, list2) {
  if (!list1 && !list2) return list1;
  else if (list1 && !list2) return list1
  else if (!list1 && list2) return list2

  if (list2.val < list1.val) {
      const tmp = list2;
      list2 = list1;
      list1 = tmp;
  }

  const head = list1

  while (list1.next && list2) {
      if (list2.val >= list1.val && list2.val <= list1.next.val) {
          const oneNext = list1.next; //4
          const newList2 = list2.next //5
          list1.next = list2; // 2->3
          list2.next = oneNext; // 3->4

          list1 = list1.next;
          list2 = newList2;
      } else {
          list1 = list1.next;
      }
  }



  if (list2) {
      list1.next = list2;
  }


  return head;

};

//Time: O(n) - with n being the longer list.
//Space: O(1) - no extra space is used
