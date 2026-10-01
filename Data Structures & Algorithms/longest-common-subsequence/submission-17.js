class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
       let m = text1.length
       let n = text2.length
       let prev = new Array(n+1).fill(0)
       let curr = new Array(n+1).fill(0)
       for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(text1[i-1]===text2[j-1]){
                curr[j]= 1 + prev[j-1]
            }else{
                curr[j] = Math.max(prev[j], curr[j-1])
            }
        }
        let temp = prev
        prev = curr
        curr = temp
       }
       return prev[n]
    }
}
