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
                    this.dfs(grid, i, j, rows, columns)
                    noOfIslands++
                }
            }
        }
        return noOfIslands
    }

    dfs(grid, i, j, rows , columns){
        if(i<0 || i>=rows || j<0 || j>=columns || grid[i][j] === "0"){
            return 
        }
        grid[i][j]="0"
        this.dfs(grid, i+1, j, rows, columns)
        this.dfs(grid, i-1, j, rows, columns)
        this.dfs(grid, i, j+1, rows, columns)
        this.dfs(grid, i, j-1, rows, columns)
        return
    }
}
