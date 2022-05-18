//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = Infinity;

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];

    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    } else if (currentPrice - minPrice > maxProfit) {
      maxProfit = currentPrice - minPrice;
    }
  }

  return maxProfit;
};

//Time: O(n) - makes one pass through prices
//Space: O(1) - no extra space is used
