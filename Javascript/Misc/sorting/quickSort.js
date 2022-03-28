const arrSwap = (arr, oneIdx, twoIdx) => {
  if (oneIdx === twoIdx) return;

  const tmp = arr[oneIdx];
  arr[oneIdx] = arr[twoIdx];
  arr[twoIdx] = tmp;
};

function quickSort(arr, startIdx, endIdx, isStart) {
  //randomizes array on input to guarantee the input is random and that we get optimal runtime
  if (isStart) {
    for (let i = 0; i < arr.length; i++) {
      let ranNum = Math.floor(
        Math.random() * (endIdx + 1 - startIdx) + startIdx
      );
      if (ranNum === i) {
        if (i !== arr.length - 1) {
          ranNum++;
        } else {
          ranNum--;
        }
      }
      arrSwap(arr, i, ranNum);
    }
    console.log(arr);
  }

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

  for (let i = startIdx; i <= endIdx; i++) {
    if (arr[i] < arr[pivot] && i !== pivot) {
      arrSwap(arr, i, divider);
      divider++;
    }
  }

  arrSwap(arr, pivot, divider);

  return divider;
}

//Test
const input = [4, 5, 2, 3, 1];
console.log(quickSort(input, 0, input.length - 1, true));

//Unoptimized
//Time: O(n^2) - in the worst case the depth of the recursive calls will be n and it takes linear time to perfrom the work on each level giving it n^2.
//Space: O(n) - this is due to the recursive calls and in the worst case it will have to go n deep in one direction of an unbalanced tree.

//How it works: it goes through the array and compares each value to the last element (pivot). if its less than it, it puts that value to the left most slot in the array (this position is kept track of and incremented with each addition). then in the end it puts the last element to the slot just to the right of all the items that are lower than it. so now everything to the right of it is less than it and everything to the left is greater. then it recursively repeats the process with each side, excluding the current pivot. example below

/*
  [4,5,1,3,2]
  1 2 | [5,4,3]
        3 [5,4]
           4 5

items without brackets is the answer -> 1,2,3,4,5
*/

//Optimized
//Time: O(nlogn) - since we randomize the input we raise the probabilty of not getting a bad pivot on each turn. this allows the algorithm to have an average case of logn calls instead of n. thus making the runtime nlogn
//Space: O(logn) - since the recursive calls will be logn on average with the randomized input the space used will also be logn
