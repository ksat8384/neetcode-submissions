class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let n = coins.length
       let dp = Array.from({length: n+1}, ()=>new Array(amount+1).fill(Infinity))
       for(let i=0;i<=n;i++){
            dp[i][0]=0
       }
       for(let i=1; i<=n; i++){
         for(let target=1; target<=amount; target++){
            //exlude ways 
            let excludeWays = dp[i-1][target] 
            let includeWays = Infinity
            //include ways
            if(target-coins[i-1]>=0){
                includeWays = 1 + dp[i][target-coins[i-1]]
            }
            dp[i][target] = Math.min(excludeWays, includeWays)
         }
       }
       return dp[n][amount] == Infinity? -1 : dp[n][amount]
   
    }
   
}
