class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length
        let cols = grid[0].length
        let islandCount = 0 
        for(let i=0; i<rows; i++){
            for(let j=0; j<cols; j++){
                if(grid[i][j]==='1'){
                    //sink it
                    this.dfs(i,j,rows,cols,grid)
                    islandCount++
                }
            }
        }
        return islandCount
    }

    dfs(i,j,rows,cols,grid){
        //out of boundary
        if(i<0 || i>=rows ||j<0 || j>=cols || grid[i][j]==="0"){
            return
        }
        grid[i][j]="0"
        this.dfs(i+1,j,rows,cols,grid)
        this.dfs(i-1,j,rows,cols,grid)
        this.dfs(i,j+1,rows,cols,grid)
        this.dfs(i,j-1,rows,cols,grid)
     }

}
