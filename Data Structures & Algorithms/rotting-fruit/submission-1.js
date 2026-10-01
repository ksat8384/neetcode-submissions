class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let rows = grid.length
        let cols = grid[0].length
        let queue = []//[r,c] of rotten fruit
        let freshFruitCount = 0
        for(let i=0;i<rows;i++){
            for(let j=0;j<cols;j++){
                if(grid[i][j]==2){
                    queue.push([i,j])
                }else if(grid[i][j]==1){
                    freshFruitCount++
                }
            }
        }
        const directions = [[1,0],[-1,0],[0,1],[0,-1]]
        let minutesCount=0
        while(queue.length>0 && freshFruitCount>0){
            let length = queue.length
            for(let i=0;i<length;i++){
                let [r,c] = queue.shift()
                for(let[dr,dc] of directions){
                    let nextRow = r+dr
                    let nextCol = c+dc
                    //check boundary and fresh
                    if(nextRow<0 ||nextRow>=rows
                    ||nextCol<0 ||nextCol>=cols
                    ||grid[nextRow][nextCol]!==1
                    ){
                        continue
                    }
                    //rot it
                    grid[nextRow][nextCol]=2
                    freshFruitCount--
                    queue.push([nextRow,nextCol])
                }
            }
            minutesCount++
        }
        return freshFruitCount===0? minutesCount : -1
       
    }
}
