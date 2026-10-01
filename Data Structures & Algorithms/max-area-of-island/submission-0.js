class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxCount = 0
        let rows = grid.length
        let cols = grid[0].length
        for(let i=0; i<rows; i++){
            for(let j=0; j<cols; j++){
               if(grid[i][j]===1){
                let count = [0]
                this.dfs(i, j, grid, rows, cols, count)
                maxCount = Math.max(maxCount, count[0])
               }
            }
        }
        return maxCount 
    }

    dfs(i, j, grid, rows, cols, count){
        if(i<0 || i>=rows || j<0 || j>=cols || grid[i][j]===0)
        return 
        grid[i][j]=0
        count[0]++
       this.dfs(i+1, j, grid, rows, cols, count)
       this.dfs(i-1, j, grid, rows, cols, count)
       this.dfs(i, j+1, grid, rows, cols, count)
       this.dfs(i, j-1, grid, rows, cols, count)
    }
}
