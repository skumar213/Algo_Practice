function binarySearchRight(arr, value, low, high) {
  if (low > high) {
    if (arr[high] === value) return high;
    return -1;
  }

  const middle = Math.floor((high + low) / 2);

  if (arr[middle] > value) {
    return binarySearchRight(arr, value, low, middle - 1);
  } else {
    return binarySearchRight(arr, value, middle + 1, high);
  }
}
function binarySearchLeft(arr, value, low, high) {
  if (low > high) {
    if (arr[high + 1] === value) return high + 1;
    return -1;
  }

  const middle = Math.floor((high + low) / 2);

  if (arr[middle] >= value) {
    return binarySearchLeft(arr, value, low, middle - 1);
  } else {
    return binarySearchLeft(arr, value, middle + 1, high);
  }
}

//Test
const arr = [1, 1, 3, 4, 4, 4, 4, 7, 8];
console.log(binarySearchRight(arr, 4, 0, arr.length - 1));
console.log(binarySearchLeft(arr, 4, 0, arr.length - 1));

//Finds all this items in an array that match the value
