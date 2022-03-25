function mergeSort(itemsArr, startIdx, endIdx) {
  let middleIdx;

  if (startIdx < endIdx) {
    middleIdx = Math.floor((startIdx + endIdx) / 2);

    //first half
    mergeSort(itemsArr, startIdx, middleIdx);

    //second half
    mergeSort(itemsArr, middleIdx + 1, endIdx);

    //merge both halves
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
  //it looks at the head of each array and puts the lower item into the respective spot in the original array
  //this works because each individual array is already sorted
  while (tmpArr1.length && tmpArr2.length) {
    if (tmpArr1[0] <= tmpArr2[0]) {
      itemsArr[k] = tmpArr1.shift();
    } else {
      itemsArr[k] = tmpArr2.shift();
    }

    k++;
  }

  //puts remaining items back into the array in sorted order
  //at this point only one array will be empty so only one while loop will trigger
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

//How it works: it splits the original array in half and keeps doing it until it has n array's with one element in it. then it merges them in pairs (the individual arrays will already be sorted) and sorts them in this process, example below. it also keeps a copy of each half of the array at each level and then puts the sorted items back into the original array.

/*Example:
  [4,3,2,1]
 [4,3] [2,1]
[4] [3] [2] [1]

 [3,4] [1,2]
  [1,2,3,4]
*/
