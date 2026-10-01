class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let n = s.length
        let dp = new Array(n+1).fill(false)
        dp[0] = true
        for(let i=1; i<=n; i++){
            for(let word of wordDict){
                if(s.substring(i-word.length, i)===word && dp[i-word.length]){
                    dp[i] = dp[i-word.length]
                }
            }
        }
        return dp[n]
    }
}
