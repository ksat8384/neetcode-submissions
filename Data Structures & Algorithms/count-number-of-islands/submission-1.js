class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length
        let columns = grid[0].length
        let noOfIslands = 0
        for(let i=0; i<rows; i++){
            for(let j=0; j<columns; j++){
                if(grid[i][j]=="1"){
                    //sink it
                    this.dfs(grid, i, j)
                    noOfIslands++
                }
            }
        }
        return noOfIslands
    }

    dfs(grid, i, j){
        if(i<0 || i>=grid.length || j<0 || j>=grid[0].length || grid[i][j] === "0"){
            return 
        }
        grid[i][j]="0"
        this.dfs(grid, i+1, j)
        this.dfs(grid, i-1, j)
        this.dfs(grid, i, j+1)
        this.dfs(grid, i, j-1)
        return
    }
}
