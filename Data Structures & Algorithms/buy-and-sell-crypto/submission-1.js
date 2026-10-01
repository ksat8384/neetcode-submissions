class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit=0
        let n=prices.length
        for(let i=0; i<n-1;i++){
            for(let j=i+1; j<n;j++){
                if(prices[j]>=prices[i]){
                    let profit = prices[j]-prices[i]
                    maxProfit = Math.max(maxProfit, profit)
                }
            }
        }
        return maxProfit
    }
}
