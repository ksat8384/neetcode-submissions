class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let minPriceSoFar = prices[0]
       let maxProfit = 0
       for(let i=1; i<prices.length; i++){
           let profit = Math.max(0, prices[i]-minPriceSoFar)
            maxProfit = Math.max(maxProfit, profit)
            minPriceSoFar = Math.min(minPriceSoFar, prices[i])
       }
       return maxProfit
    }
}
