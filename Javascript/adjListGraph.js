/*
------Prompt------
Write a function that determines if a path exists between two vertices of a directed graph.

The graph will be represented as an object, each of whose keys represents a vertex of the graph and whose value represents all vertices that can be reached from the aforementioned key.

In the example below, there is a connection from vertex a to vertex b and a connection from vertex b to vertices c and d but not a connection from vertex b to vertex a.

{
  a: ['b'],
  b: ['c', 'd'],
  c: ['d']
}

------Examples------
const graph = {
  a: ['b'],
  b: ['c', 'd'],
  c: ['d']
}

pathFinder(graph, 'a', 'd') -> true
pathFinder(graph, 'b', 'a') -> false


------Solution------
Will use depth first search to traverse the graph. The function will loop through the graph and will check if the associated array of the start point has the target. If it does, it will return true. If not, it will recursively call itself with with the currently selected vertex as the new start point. If any of the recursive calls return true, the function will return true. Otherwise if its gone through the entire array of the original start point it will return false.

Also use an object to keep track of the visited verticies.

------Time complexity------
O(N * M) - Have to go through each key and also its associated array.


------Space complexity------
O(N * M) - Keeping track of the visited vertices in the history variable and the recusive calls will take up space.
*/

//------------Solution------------------
const pathFinder = (graph, start, target, history = {}) => {
  if (graph[start] && !history[start]) {
    history[start] = true;

    for (let vertex of graph[start]) {
      if (vertex === target) {
        return true;
      }

      if (graph[start] && pathFinder(graph, vertex, target, history)) {
        return true;
      }
    }
  }

  return false;
};

//------------Solution Check------------------
const graph1 = {
  a: ["b"],
  b: ["c", "d"],
  c: ["d"],
};

console.log(pathFinder(graph1, "a", "d")); //true
console.log(pathFinder(graph1, "b", "a")); //false

const graph2 = {
  a: ["b"],
  b: ["c", "d"],
  c: ["d"],
  d: [],
};

console.log(pathFinder(graph2, "a", "b")); //true
console.log(pathFinder(graph2, "b", "a")); //false
console.log(pathFinder(graph2, "a", "d")); //true
console.log(pathFinder(graph2, "a", "a")); //false
