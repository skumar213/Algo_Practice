//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


var maxProfit = function(prices) {
  let maxProfit = 0
  let minPrice = Infinity

  for (let i = 0; i < prices.length; i++) {
      const currentPrice = prices[i]

      if (currentPrice < minPrice) {
          minPrice = currentPrice
      } else if (currentPrice - minPrice > maxProfit) {
          maxProfit = currentPrice - minPrice
      }
  }

  return maxProfit
};

//Space & Time
//Time: O(n) - makes one pass through array
//Space: O(1) - no extra space is used

/*
Trick/Pattern

1) Brute force is n^2 with a double for loop. Can do it faster by having a pointer for the lowest number and then finding the higher number after it.
2) You iterate through while keep track of the lowest number and then keep finding the different profits and keep track of the highest one

This works because the highest profit will always occur after the lowest number, since the goal here is to buy low and then sell high. That's why you keep changing the lowest number and comparing profits to the current max profit
*/


//----------
//I was also able to solve it with a sliding window that is actually faster than the proposed solution but the space an time are the same as above
/*
1) How it work is by iterating through the array and if the profit is negative you closed the window until its no longer negative.
2) It keeps checking the profit until it finds a lower number and then checks the profits of that. This is slightly faster because it is only checking the profits of the lowest numbers.


*/

var maxProfit = function(prices) {
  let profit = 0

  let front = 0

  for (let end = 1; end < prices.length; end++) {
      let currProfit = prices[end] - prices[front];

      while (currProfit < 0 && front < end) {
          front++
          currProfit = prices[end] - prices[front];
      }

      if (currProfit > profit) {
          profit = currProfit
      }
  }

  return profit
};
