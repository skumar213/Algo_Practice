function strRotate(s1, s2) {
  if (s1.length !== s2.length || !s1.length || !s2.length) return false;

  return (s1 + s1).includes(s2);
}

//Test
console.log(strRotate("waterbottle", "erbottlewat"));

//Time: O(n) - string concatenation is about N and the includes method is N
//Space: O(n) - where is n is s1, you have to concatenate it to itself
