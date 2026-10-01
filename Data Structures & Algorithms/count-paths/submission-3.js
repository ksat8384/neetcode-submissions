class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let dp = Array.from({length:m}, ()=>new Array(n).fill(0))
        for(let i=0;i<m;i++){
           for(let j=0;j<n;j++){
               if(i==0 || j==0){
                dp[i][j]=1
               }
            }
        }
         

        for(let i=1;i<m;i++){
            for(let j=1;j<n;j++){
                dp[i][j]=dp[i-1][j]+dp[i][j-1]
            }
        }
        return dp[m-1][n-1]
    }

   
}
