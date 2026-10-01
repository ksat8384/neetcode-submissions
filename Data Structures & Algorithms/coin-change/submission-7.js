class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let dp = new Array(amount+1).fill(Infinity)
        dp[0]=0
       for(let target=1; target<=amount; target++){
         for(let coin of coins){
            if(target-coin>=0){
                dp[target] = Math.min(dp[target], 1+dp[target-coin])
            }
         }
       }
       return dp[amount] == Infinity? -1: dp[amount]
    }
   
}
