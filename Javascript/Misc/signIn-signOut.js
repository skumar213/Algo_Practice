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

//Time: O(nLogn) - sorting takes this amount of time then you iterate once through logs
//Spave: O(1) - no extra space is used

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
