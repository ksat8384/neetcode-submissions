class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        let dp = new Array(amount+1).fill(0)
        dp[0]=1
        for(let i=1; i<=coins.length; i++){
            for(let j=0;j<=amount;j++){
                if(j-coins[i-1]>=0)
                    dp[j] = dp[j] + dp[j-coins[i-1]]
            }
        }
        return dp[amount]
    }
   
}
