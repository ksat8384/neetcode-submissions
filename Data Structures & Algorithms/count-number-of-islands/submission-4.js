class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if(!grid || grid.length === 0)
            return 0
        let rows = grid.length
        let cols = grid[0].length
        let noOfIslands = 0
        for(let i=0; i<rows; i++){
            for(let j=0; j<cols; j++){
                if(grid[i][j]=='1'){
                    //sink it
                     this.dfs(i,j, grid, rows, cols)
                    //count it
                    noOfIslands++
                }
            }
        }
        return noOfIslands
    }

    dfs(i,j, grid, rows, cols){
        if(i<0 || i>=rows || j<0 || j>=cols || grid[i][j]=='0')
            return 
        grid[i][j]='0'
        this.dfs(i+1,j, grid, rows, cols)
        this.dfs(i-1,j, grid, rows, cols)
        this.dfs(i,j+1, grid, rows, cols)
        this.dfs(i,j-1, grid, rows, cols)
    }
}
