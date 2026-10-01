class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        let dp = Array.from({length: coins.length}, ()=>new Array(amount+1).fill(-1))
        return this.noOfWaysRecur(amount, coins, coins.length, dp)
    }

    noOfWaysRecur(target, coins, n, dp){
        //base case
        if(target===0){
            return 1
        }
        if(n<=0 || target<0)
            return 0

        if(dp[n-1][target] !== -1){
            return dp[n-1][target]
        }    
        //include
        let excludeWays = this.noOfWaysRecur(target, coins, n-1, dp)
        let includeWays = this.noOfWaysRecur(target-coins[n-1], coins, n, dp)
        dp[n-1][target] = includeWays + excludeWays
        return dp[n-1][target]
    }
}
