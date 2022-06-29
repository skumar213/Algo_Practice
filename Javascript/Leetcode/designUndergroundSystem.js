//https://leetcode.com/problems/design-underground-system/

class UndergroundSystem{
  constructor() {
      this.aveTimes = {};
      this.usersCheckedIn = {};
  }

  checkIn(id,stationName,t) {
      this.usersCheckedIn[id] = [stationName, t]
  }

  checkOut(id,stationName,t) {
      const [startStation, startTime] = this.usersCheckedIn[id];
      const route = `${startStation} - ${stationName}`
      const totalTime = t - startTime;

      if (!(route in this.aveTimes)) {
          this.aveTimes[route] = [totalTime, 1];
      } else {
          this.aveTimes[route][0] += totalTime
          this.aveTimes[route][1]++
      }

  }

  getAverageTime(startStation,endStation) {
      const route = `${startStation} - ${endStation}`
      const [totalTime, count] = this.aveTimes[route];

      return totalTime / count;
  }
}


/*
Time: all methods are O(1) since they're using an object to add/remove
Space: O(U + S^2) - U are users and S are stations. the number of users are stored in usersCheckedIn and the combinations of stations is stored in aveTimes. Each station can have S other end points making the total combinations S^2
*/

/*
Trick/Pattern

Use two hash tables to keep track of the data. One to keep track of all users check in point and then each routes total time and number of trips


*/
