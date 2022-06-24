const arrSwap = (arr, oneIdx, twoIdx) => {
  const tmp = arr[oneIdx];
  arr[oneIdx] = arr[twoIdx];
  arr[twoIdx] = tmp;
};

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;

    while (j > 0 && arr[j] < arr[j - 1]) {
      arrSwap(arr, j, j - 1);
      j--;
    }
  }

  return arr;
}

//Test
console.log(insertionSort([5, 4, 3, 2, 1]));

//Time: O(n^2) - have to go through the array again for each element
//Space: O(1) - constant space is used

//How it works: it checks pairs at a time and takes the element at j and keeps bringing it back until its no longer smaller than the one before it

/*
[5, 4, 3, 2, 1]
[4, 5, 3, 2, 1]
[3, 4, 5, 2, 1]
[2, 3, 4, 5, 1]
[1, 2, 3, 4, 5]
*/
