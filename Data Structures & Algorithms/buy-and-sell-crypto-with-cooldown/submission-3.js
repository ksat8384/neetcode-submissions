class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(!prices || prices.length==0)
            return 0
        let dp = Array.from({length: prices.length}, ()=>new Array(2).fill(-1))    
        return this.findProfit(0, 1, prices, dp)   
    }

    findProfit(i, canBuy, arr, dp){
        if(i >= arr.length)
            return 0
        if(dp[i][canBuy]!== -1)
            return dp[i][canBuy]    

        if(canBuy){
            let buy = -arr[i] + this.findProfit(i+1, 0, arr, dp)
            let cooldown = this.findProfit(i+1, 1, arr, dp)
            dp[i][canBuy] = Math.max(buy, cooldown)
        }else{
            let sell = arr[i] + this.findProfit(i+2, 1, arr, dp)
            let cooldown = this.findProfit(i+1, 0, arr, dp)
            dp[i][canBuy] = Math.max(sell, cooldown)
        }
        return dp[i][canBuy]    
    }
}
