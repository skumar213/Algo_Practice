/*
---Prompt
Application logs are used in analysis of interactions with an application and may beused to detect specific actions.

A log file is provided as a string array where each entry is in the form "_user_id timestamp action_".
Each of the values is separated by a space.

- Both _user_id_ and timestamp consist only of digits, are at most 9 digits long and start with a non-zero digit.
- _timestamp_ represents the time in seconds since the application was last launched
- action will be either "sign-in" or "sign-out"

Given a log with entries in no particular order, return an array of strings that denote _user_id_'s of users who signed out in _maxSpan_ seconds or less after signing in.

----Example

_n = 7
logs = ["30 99 sign-in", "30 105 sign-out", "12 100 sign-in", "20 80 sign-in", "12 120 sign-out", "20 101 sign-out", "21 110 sign-in"]
maxSpan = 20_

```
ID  Sign in  Sign out  Time delta
--  -------  --------  ----------
30  99       105       6
12  100      120       20
20  80       101       21
21  110
```

The users with id's 30 and 12 were not signed in for more than _maxSpan_ = 20 seconds. In sorted numerical order, the return array is _["12", "30"]_.
*/

function sortLogs(a, b) {
  /*
    -index 0 = user_id
    -index 1 = timestamp
    -index 2 = action
  */
  a = a.split(" ");
  b = b.split(" ");

  const userIdA = parseInt(a[0], 10);
  const userIdB = parseInt(b[0], 10);
  const timeStampA = parseInt(a[1], 10);
  const timeStampB = parseInt(b[1], 10);
  const actionA = a[2];
  const actionB = b[2];

  if (userIdA < userIdB) return -1;
  if (userIdA > userIdB) return 1;
  else {
    if (timeStampA < timeStampB) return -1;
    if (timeStampA > timeStampB) return 1;
    else {
      if (actionA < actionB) return -1;
      if (actionA > actionB) return 1;
      return 0;
    }
  }
}

function processLogs(logs, maxSpan) {
  const ans = [];
  logs.sort(sortLogs);

  for (let i = 0; i < logs.length - 1; i++) {
    const logA = logs[i].split(" ");
    const logB = logs[i + 1].split(" ");

    const userIdA = parseInt(logA[0], 10);
    const userIdB = parseInt(logB[0], 10);

    if (userIdA === userIdB) {
      const timeStampA = parseInt(logA[1], 10);
      const timeStampB = parseInt(logB[1], 10);

      if (timeStampB - timeStampA <= maxSpan) ans.push(userIdA.toString());
    }
  }

  return ans;
}

//Tests
const logs = [
  "30 99 sign-in",
  "30 105 sign-out",
  "12 100 sign-in",
  "20 80 sign-in",
  "12 120 sign-out",
  "20 101 sign-out",
  "21 110 sign-in",
];
const maxSpan = 20;

console.log(processLogs(logs, maxSpan)); // [12,30]

//Time: O(nLogn) - sorting takes this amount of time then you iterate once through logs
//Spave: O(1) - no extra space is used
