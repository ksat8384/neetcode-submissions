class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let dp = Array.from({length: coins.length+1}, ()=>new Array(amount+1).fill(-1))
        let res = this.minCount(coins.length, coins, amount, dp)
        return res === Infinity ? -1 : res;
    }
    minCount(n, coins, target, dp){
        if(target==0)
            return 0
        if(n==0 || target<0)
            return Infinity
        if(dp[n-1][target]!==-1)
            return dp[n-1][target]    
        let includeWays = Infinity
        if(target-coins[n-1]>=0){
             let res = this.minCount(n, coins, target-coins[n-1], dp)
             if(res !== Infinity){
                includeWays = 1+ res
             }
        }    
        
        let excludeWays = this.minCount(n-1, coins, target, dp) 
        dp[n-1][target] = Math.min(includeWays, excludeWays)    
        return dp[n-1][target] 
    }
}
