function oneAway(w1, w2) {
  if (Math.abs(w1.length - w2.length) > 1) return false;

  const sameLength = w1.length === w2.length ? true : false;

  if (w1.length < w2.length) {
    const tmp = w1;
    w1 = w2;
    w2 = w1;
  }

  let p1 = -1;
  let p2 = 0;
  let count = 0;

  while (p1 < w1.length && p2 < w2.length) {
    p1++;

    if (w1[p1] !== w2[p2]) {
      count++;
      if (count > 1) return false;

      //needed for the 'replace' condition, increment both pointers for 'replace' and just p1 otherwise
      if (!sameLength) {
        continue;
      }
    }

    p2++;
  }

  return true;
}

//Tests
console.log(oneAway("pale", "ple")); // true - remove
console.log(oneAway("pale", "pales")); // true - insert
console.log(oneAway("pale", "bale")); // true - replace
console.log(oneAway("pale", "bake")); // false

/*
-------------Space and Time Complexity-----------
Space: O(n) - a copy of the shorter array is made if w1 < w2
Time: O(n) - where n is the length of the shorter word
*/
