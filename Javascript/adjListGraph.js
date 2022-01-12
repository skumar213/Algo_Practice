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
-loop through object
  -push current item to history array to keep track
  -check if items in array are the target
    -if yes, return true
    -if no, recursively call the function with the current letter as the start

------Time complexity------
O() -

------Space complexity------
O() -
*/

//------------Solution------------------
const pathFinder = (graph, start, target, history=[]) => {
  if (graph[start] && !history.includes(start)) {
    history.push(start)

    for (let vertex of graph[start]) {
      if (vertex === target) {
        return true;
      }

      if (graph[start] && pathFinder(graph, vertex, target, history)) {
        return true
      }
    }

  }

  return false
}




//------------Solution Check------------------
const graph = {
  a: ['b'],
  b: ['c', 'd'],
  c: ['d']
}



console.log(pathFinder(graph, 'a', 'd'))
// console.log(pathFinder(graph, 'b', 'a'))
