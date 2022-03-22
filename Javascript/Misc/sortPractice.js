//------SELECTION SORT---------
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minNum = arr[i]
    let minIndex = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < minNum) {
        minNum = arr[j]
        minIndex = j
      }
    }

    const tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;

  }

  return arr;
}

//Tests
const arr = [3,4,2,5,1]
console.log(selectionSort(arr))

//Time: O(n^2) - nested for loop
//Space: O(1) - constant space used

