class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let ans = 0;
        let lowest_val = prices[0];

        for (let i = 1; i < prices.length; i++) {

            ans=Math.max(ans,prices[i]-lowest_val)
            lowest_val=Math.min(lowest_val,prices[i])
        }
        return ans 
    }
}
