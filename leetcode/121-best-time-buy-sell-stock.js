// leetcode.com/problems/best-time-to-buy-and-sell-stock/
// easy rating
/**
 * @param {number[]} prices
 * @return {number}
 */
https: var maxProfit = function (prices) {
  let profit = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    profit = Math.max(profit, prices[i] - min);
  }
  return profit;
};
