class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let minPrice = prices[0]
        let maxprofit = 0

        for (let j = 1; j < prices.length; j++) {
            if (prices[j] < minPrice) {
                minPrice = prices[j]
            }
            if  ((prices[j]-minPrice)>maxprofit) {
                maxprofit=prices[j]-minPrice
            }

       }
       return maxprofit
    }
}
