class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let dp = new Array(s.length+1).fill(-1)
      return this.wordBreakRecur(s, 0, wordDict, dp)
    }

    wordBreakRecur(s, index, wordDict, dp){
        if(index == s.length)
            return true
        if(dp[index] !== -1){
            return dp[index]
        } 
        for(let word of wordDict){
            let isMatch = s.substring(index, index+word.length)===word
           if(isMatch && this.wordBreakRecur(s, index+word.length, wordDict, dp)){
               return dp[index] = true 
           }
        }

        return dp[index] = false    
    }

   
}