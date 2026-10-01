class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        let dp = new Array(amount+1).fill(0)
        dp[0]=1
        for(let coin of coins){
            for(let target=1;target<=amount;target++){
                if(target-coin>=0){
                    dp[target] +=  dp[target-coin]
                }
            }
        }
        return dp[amount]
    }
}
