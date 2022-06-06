// https://leetcode.com/problems/validate-binary-search-tree/

//recursively
var isValidBST = function (root) {
  return validate(root, null, null);
};

function validate(root, high, low) {
  if (!root) return true;

  if ((high !== null && root.val >= high) || (low !== null && root.val <= low))
    return false;

  return (
    validate(root.left, root.val, low) && validate(root.right, high, root.val)
  );
}

//Time: O(n) - have to touch all nodes once
//Space: O(n) - the recursive call stack will be n

/*
1) Instead of checking the parent with its children, you check the current node against a high and low value
2) The high and low will start off as null and will be updated as it goes deeper into the call stack
    1) If going left:
        1) the high will be the parent and the low will be the passed down value (from grand parent)
    2) If going right:
        1) the high will be the passed down value (from grand parent) and the low will be the parent
*/



//iteratively
var isValidBST = function(root) {
  if (!root) return true;

  const stack = [[root,Infinity, -Infinity]];

  while (stack.length) {
      const [node, high, low] = stack.pop();

      if ((node.val >= high) || (node.val <= low)) return false

      if (node.left) {
          stack.push([node.left, node.val, low])
      }

      if (node.right) {
          stack.push([node.right, high, node.val])
      }
  }

  return true;
};


// O(n) - have to touch all nodes once
//O(n) - the stack could at worst hold all the nodes

/*
1) This method also uses the high and low values but uses a stack to keep track of which node to check and also the high and low value associated with it
2) for each iteration it will check if the current node is with in the range and then will push its children with their respective high/low value into the stack
*/


