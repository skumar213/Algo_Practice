const arrSwap = (arr, oneIdx, twoIdx) => {
  if (oneIdx === twoIdx) return;

  const tmp = arr[oneIdx];
  arr[oneIdx] = arr[twoIdx];
  arr[twoIdx] = tmp;
};

function quickSort(arr, startIdx, endIdx) {
  if (startIdx < endIdx) {
    let pivot = partition(arr, startIdx, endIdx);
    quickSort(arr, startIdx, pivot - 1);
    quickSort(arr, pivot + 1, endIdx); //issue is here
  }

  return arr;
}

function partition(arr, startIdx, endIdx) {
  let pivot = endIdx;
  let divider = startIdx;

  for (let i = startIdx; i < endIdx; i++) {
    if (arr[i] < arr[pivot]) {
      arrSwap(arr, i, divider);
      divider++;
    }
  }

  arrSwap(arr, pivot, divider);

  return divider;
}

//Test
const input = [4, 5, 1, 3, 2];
console.log(quickSort(input, 0, input.length - 1));

//Time: O(n^2) - in the worst case the depth of the recursive calls will be n and it takes linear time to perfrom the work on each level giving it n^2.
//Space: O(n) - this is due to the recursive calls and in the worst case it will have to go n deep in one direction of an unbalanced tree.

//How it works: it goes through the array and compares each value to the last element. if its less than it, it puts that value to the left most slot in the array (this position is kept track of and incremented with each addition). then in the end it puts the last element to the slot just to the right of all the items that are lower than it. so now everything to the right of it is less than it and everything to the left is greater. then it recursively repeats the process with each side, excluding the current pivot. example below

/*
  [4,5,1,3,2]
  1 2 | [5,4,3]
        3 [5,4]
           4 5

items without brackets is the answer -> 1,2,3,4,5
*/
