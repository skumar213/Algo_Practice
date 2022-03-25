function mergeSort(itemsArr, startIdx, endIdx) {
  let middleIdx;

  if (startIdx < endIdx) {
    middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSort(itemsArr, startIdx, middleIdx);
    mergeSort(itemsArr, middleIdx + 1, endIdx);

    merge(itemsArr, startIdx, middleIdx, endIdx);
  }

  return itemsArr;
}

function merge(itemsArr, startIdx, middleIdx, endIdx) {
  const tmpArr1 = [];
  const tmpArr2 = [];

  for (let i = startIdx; i <= middleIdx; i++) tmpArr1.push(itemsArr[i]);
  for (let j = middleIdx + 1; j <= endIdx; j++) tmpArr2.push(itemsArr[j]);

  let k = startIdx;

  //while both arrays have items in them
  while (tmpArr1.length && tmpArr2.length) {
    if (tmpArr1[0] <= tmpArr2[0]) {
      itemsArr[k] = tmpArr1.shift();
    } else {
      itemsArr[k] = tmpArr2.shift();
    }

    k++;
  }

  while (tmpArr1.length) {
    itemsArr[k] = tmpArr1.shift();
    k++;
  }

  while (tmpArr2.length) {
    itemsArr[k] = tmpArr2.shift();
    k++;
  }
}

//Test
const arr = [8, 3, 6, 4, 7, 1, 2, 5];
console.log(mergeSort(arr, 0, arr.length - 1));

//Time: O(nLogn) - as it splits each array it takes logn times for it to do that until it reaches the last level and it has to do it n times
//Space: O(n) - has it make a two copy arrays that togther contain all the original elements
