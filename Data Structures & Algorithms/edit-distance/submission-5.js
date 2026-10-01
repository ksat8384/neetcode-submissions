class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        let m = word1.length
        let n = word2.length
        let prev = new Array(n+1).fill(0)
        let curr = new Array(n+1).fill(0)
        //Base case, 0 the row 
        for(let j=0; j<=n; j++){
            prev[j]=j
        }
       
        for(let i=1;i<=m;i++){
            curr[0]=i // j=0
            for(let j=1;j<=n;j++){
                if(word1[i-1]===word2[j-1]){
                    curr[j] = prev[j-1]
                }else{
                    curr[j] = 1 + Math.min(
                        prev[j-1],
                        curr[j-1],
                        prev[j]
                    )
                }
            }
            prev=[...curr]
        }
        return prev[n]
    }

}