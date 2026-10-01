class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        
        let dp = new Array(amount+1).fill(Infinity)
        dp[0]=0
        for(let targetAmount=1; targetAmount<=amount; targetAmount++){
            for(let coin of coins){
               if(targetAmount-coin >= 0){
                    dp[targetAmount] = Math.min(dp[targetAmount], 1 + dp[targetAmount-coin])
               }
            }
        }
        return dp[amount]!==Infinity? dp[amount]: -1
    }
}
