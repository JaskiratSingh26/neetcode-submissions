class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let max = 0
        let minBuy = prices[0]

        for (let i = 1; i < prices.length; i++) {

            if (prices[i] > minBuy) {

                max = Math.max(max, prices[i] - minBuy)

            }
            else
           {

                minBuy = Math.min(minBuy, prices[i])
           }
            
        }

        return max
    }
}
