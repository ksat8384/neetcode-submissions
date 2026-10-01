class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        let dp = Array.from({length: coins.length+1}, ()=>new Array(amount+1).fill(0))
        dp[0][0]=1
        for(let i=1; i<=coins.length; i++){
            for(let j=0; j<=amount; j++){
                //exclude
                dp[i][j] += dp[i-1][j]
                //include
                if(j-coins[i-1]>=0){
                    dp[i][j] += dp[i][j-coins[i-1]]
                }

            }
        }
        return dp[coins.length][amount]
    }

   
}
