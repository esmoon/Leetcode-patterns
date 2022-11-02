// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

const array = [7, 1, 5, 3, 6, 4];
const array2 = [7, 6, 4, 3, 1];
const array3 = [1, 2];
const array4 = [2, 4, 1];
const array5 = [1, 2, 3, 4, 5];

const func = (array) => {
  let profit = 0;
  let minIndex = array[0];
  for (let i = 0; i < array.length; i++) {
    let elem = array[i];
    if (elem < minIndex) {
      minIndex = elem;
    }
    if (profit > elem - minIndex) {
      continue;
    } else {
      profit = elem - minIndex;
    }
  }
  return profit;
};

console.log(func(array));
