class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        let n = coins.length
       let dp = Array.from({length: n+1}, ()=>new Array(amount+1).fill(0))
       dp[0][0]=1
       for(let i=1; i<=n; i++){
         for(let j=0; j<=amount; j++){
            //include ways
            if(j-coins[i-1]>=0){
                dp[i][j] += dp[i][j-coins[i-1]]
            }
            dp[i][j] += dp[i-1][j]
         }
       }
       return dp[n][amount]
    }
   
}
