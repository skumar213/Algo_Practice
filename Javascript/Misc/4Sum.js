function findArrayQuadruplet(arr, s) {
  // your code goes here

  if (arr.length < 4) return [];

  arr.sort((a, b) => {
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
  });

  for (let i = 0; i < arr.length - 3; i++) {
    for (let j = i + 1; j < arr.length - 2; j++) {
      const rem = s - (arr[i] + arr[j]);

      let p1 = j + 1;
      let p2 = arr.length - 1;

      while (p1 < p2) {
        const sum = arr[p1] + arr[p2];

        if (sum === rem) return [arr[i], arr[j], arr[p1], arr[p2]];
        else if (sum > rem) p2--;
        else p1++;
      }
    }
  }

  return [];
}

//Time: O(n ^ 3) - have 3 nested loops
//Space: O(1) - no extra space was used
