/*
---Prompt
A schedule has just been released for an upcoming tech conference. The schedule provides the start and end times of each of the presentations. Once a presentation has begun, no one can enter or leave the room. It takes no time to go from one presentation to another. Determine the maximum number of presentations that can be attended by one person.

----Example
_n = 3_
_scheduleStart = [1, 1, 2]
scheduleEnd = [3, 2, 4]_
Using 0-based indexing, an attendee could attend any presentation alone, or both presentations _1_ and _2_. Presentation _0_ ends too late to be able to attend presentation _2_ afterwards. The maximum number of presentations one person can attend is _2_.
*/

//Optimized
function sortTimes(a, b) {
  if (a.end < b.end) return -1;
  if (a.end > b.end) return 1;
  return 0;
}

function createDS(start, end) {
  const times = [];

  for (let i = 0; i < start.length; i++) {
    times.push({
      start: start[i],
      end: end[i],
    });
  }

  return times.sort(sortTimes);
}

function maxPresentations(start, end) {
  const times = createDS(start, end);
  let count = 1;
  let timeLimit = times[0].end;

  for (let i = 1; i < times.length; i++) {
    if (times[i].start >= timeLimit) {
      count++;
      timeLimit = times[i].end;
    }
  }

  return count;
}

//O(nLogn) - for sorting
//you sort by end times and then check the next ones start time and see if its greater than or equal to the previous end time
//if it is you increment the count and then make that the new end time.
//this works because of i2 can do i3 so can i1 since they're sorted by end time


//Old and slower
function sortTimes2(a, b) {
  if (a.start < b.start) return -1;
  if (a.start > b.start) return 1;
  else {
    if (a.end < b.end) return -1;
    if (a.end > b.end) return 1;
    return 0;
  }
}

function createDS2(start, end) {
  const times = [];

  for (let i = 0; i < start.length; i++) {
    times.push({
      start: start[i],
      end: end[i],
      eventMax: null,
    });
  }

  return times.sort(sortTimes2);
}

function maxPresentations2(start, end) {
  const times = createDS2(start, end);
  let max = -Infinity;

  //loop from end of DS
  for (let i = times.length - 1; i >= 0; i--) {
    let currentMax = 1;

    //loop from current to end of DS
    for (let j = i + 1; j < times.length; j++) {
      let count = 1;

      if (times[i].end <= times[j].start) {
        count += times[j].eventMax;
      }

      if (count > currentMax) currentMax = count;
    }

    times[i].eventMax = currentMax;

    if (currentMax > max) max = currentMax;
  }

  return max;
}

const start = [1, 1, 2, 4, 4, 6];
const end = [2, 3, 4, 6, 7, 8];

console.log(maxPresentations(start, end));

//O(n^2) - have to check the rest for each one
