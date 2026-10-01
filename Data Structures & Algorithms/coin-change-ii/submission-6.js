class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        let n = coins.length
      let dp = Array.from({length: n}, ()=>new Array(amount+1).fill(-1))

       return this.countRecur(coins.length, amount, coins, dp)
    }
    countRecur(n, target, coins, dp){
        if(target == 0)
            return 1
        if(n==0 || target<0){
            return 0
        }
        if(dp[n-1][target]!==-1)
            return dp[n-1][target]
        let includeWays = this.countRecur(n, target-coins[n-1], coins, dp)
        let excludeWays = this.countRecur(n-1, target, coins, dp)

        dp[n-1][target] = excludeWays + includeWays

        return dp[n-1][target]
    }
}
