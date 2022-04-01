function binarySearch(arr, value, low, high) {
  if (low > high) return -1;

  const middle = Math.floor((high + low) / 2);

  if (arr[middle] === value) return middle;

  if (arr[middle] > value) {
    return binarySearch(arr, value, low, middle - 1);
  } else {
    return binarySearch(arr, value, middle + 1, high);
  }
}

//Test
const arr = [1, 2, 3, 4, 5];
console.log(binarySearch(arr, 8, 0, arr.length - 1));

//Time: O(logn) - with each step the array is cut in half
//Space: O(1) - no space is used

//How it works: it sees if the value matches the middle element. if it does it'll return that index, otherwise it will recursively call itself with the lower half if the middle element was greater then the value and the upper half if it was lower. Note: in order for this to work the input needs to be in sorted order.
