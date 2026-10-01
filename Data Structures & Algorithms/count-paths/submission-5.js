class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let curr = new Array(n).fill(1)

        for(let i=1;i<m;i++){
            for(let j=1;j<n;j++){
                curr[j]=curr[j]+curr[j-1]
            }
        }
        return curr[n-1]
    }

   
}
