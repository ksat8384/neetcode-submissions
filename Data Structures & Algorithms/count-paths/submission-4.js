class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let prev = new Array(n).fill(1)
        let curr = new Array(n).fill(0)
        curr[0]=1

        for(let i=1;i<m;i++){
            for(let j=1;j<n;j++){
                curr[j]=prev[j]+curr[j-1]
            }
            prev=[...curr]
        }
        return prev[n-1]
    }

   
}
