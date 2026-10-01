class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
       let dp = new Array(n).fill(0)
       dp[0]=1
       for(let i=0; i<m; i++){
            for(let j=1; j<n; j++){
                dp[j] = dp[j] + dp[j-1]
            }
       }
       return dp[n-1]
    }
}
