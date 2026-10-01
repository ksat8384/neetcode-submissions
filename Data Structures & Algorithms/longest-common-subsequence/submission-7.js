class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let m = text1.length
        let n = text2.length
        let prevRow = new Array(n+1).fill(0)
        let currRow = new Array(n+1).fill(0)
        for(let i=1; i<=m; i++){
            for(let j=1; j<=n; j++){
                if(text1[i-1] === text2[j-1]){
                    currRow[j] = 1 + prevRow[j-1]
                }else{
                     currRow[j] = Math.max(prevRow[j], currRow[j-1])
                }
            }
            let temp = prevRow
            prevRow = currRow
            currRow = temp
        }
        return prevRow[n]
    }
    
}
