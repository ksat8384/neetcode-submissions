class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const INF = 2147483647
        let rows = grid.length
        let cols = grid[0].length
        let queue = [] //[i,j]
        for(let i=0; i<rows; i++){
            for(let j=0; j<cols; j++){
                if(grid[i][j]===0)
                    queue.push([i,j])
            }
        }
        const directions = [[1,0],[-1,0],[0,1],[0,-1]]
        let head = 0
        while(head<queue.length){
            let [r, c] = queue[head++]
            
            for(let [dr, dc] of directions){
                let nextRow = r+dr
                let nextCol = c+dc
                //check boundary
            if(nextRow<0 || nextRow>=rows || nextCol<0 || nextCol>=cols || grid[nextRow][nextCol]!==INF){
                continue
            }
                grid[nextRow][nextCol] = 1 + grid[r][c]
                queue.push([nextRow, nextCol])
            }
        }
        return grid        
    }
   
}
