class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let m = text1.length
        let n = text2.length
        let memo = Array.from({length: m+1}, ()=> new Array(n+1).fill(-1))
        return this.lcsRecurWithMemoization(text1, text2, m, n, memo)
    }

    lcsRecurWithMemoization(text1, text2, m, n, memo){
        //Base case
        if(m===0 || n===0)
            return 0
        if(memo[m][n] !== -1)
            return memo[m][n]
            //match
        if(text1[m-1] === text2[n-1]){
            memo[m][n] = 1 + this.lcsRecurWithMemoization(text1, text2, m-1, n-1, memo)
        }else{
              memo[m][n] = Math.max(
                this.lcsRecurWithMemoization(text1, text2, m, n-1, memo),
                this.lcsRecurWithMemoization(text1, text2, m-1, n, memo)
              )
        }
        return memo[m][n]        
    }

    
}
