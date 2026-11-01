// Best Time to Buy and Sell Stock (Easy)
// https://neetcode.io/problems/buy-and-sell-crypto/question?list=blind75
//
// You are given an integer array `prices` where `prices[i]` is the price of
// NeetCoin on the `ith` day.
//
// You may choose a single day to buy one NeetCoin and choose a different day
// in the future to sell it.
//
// Return the maximum profit you can achieve. You may choose to not make any
// transactions, in which case the profit would be `0`.
//
// Example 1:
//   Input: prices = [10,1,5,6,7,1]
//   Output: 6
//   Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.
//
// Example 2:
//   Input: prices = [10,8,7,5,2]
//   Output: 0
//   Explanation: No profitable transactions can be made, thus the max profit is 0.
//
// Constraints:
//   1 <= prices.length <= 100
//   0 <= prices[i] <= 100

class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let left = 0; // buy day
    let right = 1; // sell day, shouldn't be same as buy day;
    let maxProfit = 0;

    while (right < prices.length) {
      if (prices[right] > prices[left]) {
        // should know if we are in profit, and see what's max profit
        const profit = prices[right] - prices[left];
        maxProfit = Math.max(maxProfit, profit);
      } else {
        // if above statement is not correct, buy day is bigger than sell day,
        // so we are not in profit, so next right will be the left.
        left = right;
      }
      right++; // keep iterating till we find max profit
    }
    return maxProfit;
  }
}

// Time complexity : O(n);
// Space complexity : O(1);

const solution = new Solution();
console.log(solution.maxProfit([10, 1, 5, 6, 7, 1])); // 6
console.log(solution.maxProfit([10, 8, 7, 5, 2])); // 0
