//https://leetcode.com/problems/copy-list-with-random-pointer/



var copyRandomList = function(head) {
  if (!head) return head;

  let res = null;
  let hash = new Map()

  let headCopy = head;
  let prevNode = null;

  while (headCopy) {
      const copy = new Node(headCopy.val, null, null)

      hash.set(headCopy, copy)

      if (res === null) {
          res = copy
          prevNode = copy
      } else {
          prevNode.next = copy
          prevNode = copy
      }

      headCopy = headCopy.next
  }



  headCopy = head;
  let resCopy = res

  while (headCopy) {
      if (headCopy.random !== null) {
          resCopy.random = hash.get(headCopy.random)
      }

      headCopy = headCopy.next
      resCopy = resCopy.next
  }

  return res
};


//Time: O(n) - have to go through all nodes
//Space: O(n) - the hash table takes n space

/*
1) First go through the original list and make a copy while also creating dictionary where the
    original node is the key with its copy as the value
2) Then go through the original list again using the dictionary to set the copy's random pointer

*/
