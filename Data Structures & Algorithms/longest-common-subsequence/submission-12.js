class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let m = text1.length
        let n = text2.length
        let memo = Array.from({length: m+1}, ()=>new Array(n+1).fill(-1))

        const lcsRecur = (m, n)=> {
            if(m==0||n==0)
                return 0
            if(memo[m][n]!==-1){
                return memo[m][n]
            }    
            if(text1[m-1]===text2[n-1]){
                memo[m][n] = 1+lcsRecur(m-1, n-1)
            }else{
                memo[m][n] = Math.max( lcsRecur(m-1, n), lcsRecur(m, n-1))
            }
            return memo[m][n]
        }

        return lcsRecur(m,n)
       
    }

   
}
