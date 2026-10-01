class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPriceSoFar = prices[0]
        let res=0
        for(let i=1; i<prices.length; i++){
            let profit = Math.max(0, prices[i]-minPriceSoFar)
            res = Math.max(res, profit)
            minPriceSoFar = Math.min(prices[i], minPriceSoFar)
        }
        return res
    }
}
