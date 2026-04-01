class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let l = 0;
        let r = 1;
        while (r < prices.length){
            if (prices[l] < prices[r]) {
                profit = Math.max (profit, prices[r] - prices[l])
                r++
            } else {
                l = r;
                r++
            }
        }
        return profit
    }
}
