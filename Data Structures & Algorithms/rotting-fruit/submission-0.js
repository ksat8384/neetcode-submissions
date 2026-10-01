class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let rows = grid.length
        let cols = grid[0].length
        let queue = []//[r,c] of rotten fruit index
        let freshOrangeCount=0
        for(let i=0; i<rows; i++){
            for(let j=0; j<cols; j++){
                if(grid[i][j]===2){
                    queue.push([i,j])
                }else if (grid[i][j]===1){
                    freshOrangeCount++
                }
            }
        }
        const directions = [[1,0],[-1,0],[0,1],[0,-1]]
        let minuteCount = 0
        while(queue.length>0 && freshOrangeCount>0){
            let length = queue.length
            for(let i=0; i<length; i++){
                let [r,c]=queue.shift()
                for(let [dr,dc] of directions){
                    let nextRow = r+dr
                    let nextCol = c+dc
                    //check boundary
                    if(nextRow<0||nextRow>=rows
                    ||nextCol<0||nextCol>=cols 
                    || grid[nextRow][nextCol]===0 || grid[nextRow][nextCol]===2 ){
                        continue
                    }
                    //rot it
                    grid[nextRow][nextCol]=2
                    freshOrangeCount--
                    queue.push([nextRow,nextCol])
                }
            }
             minuteCount++
        }
        return freshOrangeCount===0? minuteCount:-1
    }
}
