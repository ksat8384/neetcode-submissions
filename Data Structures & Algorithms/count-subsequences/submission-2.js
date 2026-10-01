class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        let m = s.length
        let n = t.length
        let dp = Array.from({length:m+1}, ()=>new Array(n+1).fill(0))
        //base case, An empty string t is a subsequence of any prefix of s exactly once
        for(let i=0;i<=m;i++){
            dp[i][n] = 1
        }

        for(let i=m-1; i>=0; i--){
            for(let j=n-1;j>=0; j--){
                if(s[i]===t[j]){
                    dp[i][j] = dp[i+1][j+1] + dp[i+1][j]
                }else{
                    dp[i][j] = dp[i+1][j]
                }
            }
        }
        return dp[0][0]
    }
   

//
    // s = "caat"
    // t = "cat"
    // if(s[i]===t[j])
    //     dfs(i+1, j+1) + dfs(i+1,j)
    // else
    //     dfs(i+1, j) 

    // //base case
    // if(j==t.length)
    //     return 1  
    // if(i==s.length)
    //     return 0         

}
