class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        if(s1.length + s2.length !== s3.length)
            return false
        let m = s1.length
        let n = s2.length    
        let dp = Array.from({length: m+1}, ()=>new Array(n+1).fill(false))   
        dp[m][n]=true
        for(let i=m; i>=0; i--){
            for(let j=n; j>=0; j--){
                 // Skip the base case cell we just initialized
                if (i === m && j === n) continue;
                
                if(i<s1.length && s1[i]==s3[i+j]){
                    dp[i][j] = dp[i+1][j]
                }
                 if(j<s2.length && s2[j]==s3[i+j]){
                    dp[i][j] = dp[i][j+1]
                }
            }
        }
        return dp[0][0]
    }

    interLeaveHelper(i, j, s1, s2, s3, dp){
        if(i === s1.length && j === s2.length)
            return true
        if(dp[i][j] !== -1)
            return dp[i][j]    
        let chooseS1 = false
        let chooseS2 = false
        if(i<s1.length && s1[i]===s3[i+j]) 
            chooseS1 = this.interLeaveHelper(i+1, j, s1, s2, s3, dp)  
        if(j<s2.length && s2[j]===s3[i+j]) 
            chooseS2 = this.interLeaveHelper(i, j+1, s1, s2, s3, dp) 
        dp[i][j] = chooseS1 || chooseS2  
        return dp[i][j]       
    }
}
