class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        let rows = matrix.length
        let cols = matrix[0].length
        let dp = Array.from({length:rows}, () => new Array(cols).fill(-1))
        let max = 0
        for(let i=0; i<rows; i++){
            for(let j=0;j<cols;j++){
               max = Math.max(max, this.dfs(matrix, i, j, rows, cols, -Infinity, dp))
            }
        }
        return max
    }

    dfs(matrix, i, j, rows, cols, prevVal, dp){
        if(i<0 || i>=rows || j<0 || j>=cols || matrix[i][j]<=prevVal)
            return 0
        if(dp[i][j] !== -1)
            return dp[i][j]    
        let prev = matrix[i][j]    
        let res = 1
        res = Math.max(res, 1 + this.dfs(matrix, i+1, j, rows, cols, prev, dp))
        res = Math.max(res, 1 + this.dfs(matrix, i-1, j, rows, cols, prev, dp))
        res = Math.max(res, 1 + this.dfs(matrix, i, j+1, rows, cols, prev, dp))
        res = Math.max(res, 1 + this.dfs(matrix, i, j-1, rows, cols, prev, dp))
        dp[i][j]=res
        return dp[i][j]
    }
}
