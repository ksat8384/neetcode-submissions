class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
       let n = s.length
       let dp = new Array(s.length+1).fill(false)
       dp[n]=true
       for(let i=n-1;i>=0;i--){
         for(let word of wordDict){
            if(s.substring(i, i+word.length)===word && dp[i+word.length]){
                dp[i]=true
            }
         }
       }
       return dp[0]
    }
}
