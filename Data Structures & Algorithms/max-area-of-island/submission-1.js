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
                 maxCount = Math.max(maxCount, this.bfs(i,j, grid, rows, cols))
               }
            }
        }
        return maxCount 
    }

    bfs(i,j, grid, rows, cols){
        let queue = [[i,j]]
        //mark as visited
        grid[i][j]=0
        let area = 0
        let directions = [[1,0],[-1,0],[0,1],[0,-1]]
        while(queue.length >0){
            let [currentRow, currentCol] = queue.shift()
            area++
            for(let [dr, dc] of directions){
                let nextRow = currentRow + dr
                let nextCol = currentCol + dc
                //check boundaries
                if(nextRow>=0 && nextRow<rows 
                && nextCol>=0 && nextCol<cols 
                && grid[nextRow][nextCol]===1){
                    //mark as visited immediately
                    grid[nextRow][nextCol]=0
                    queue.push([nextRow, nextCol])

                }
            }

        }
        return area
    }

    
}
