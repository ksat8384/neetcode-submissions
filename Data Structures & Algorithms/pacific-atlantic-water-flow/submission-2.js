class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
  
    let rows = heights.length
    let cols = heights[0].length

    let pacificQueue = []
    let pacificVisited = Array.from({length:rows}, ()=>new      
     Array(cols).fill(false))

    let atlanticQueue = []
    let atlanticVisited = Array.from({length:rows}, ()=>new 
     Array(cols).fill(false))

    //add top of pacific into our pacific queue and pacific visited array
    for(let j=0;j<cols;j++){
        pacificQueue.push([0,j])
        pacificVisited[0][j]=true
    } 
    //add left of pacific into our pacific queue and pacific visited array
    for(let i=1;i<rows;i++){
        pacificQueue.push([i,0])
        pacificVisited[i][0]=true
    }
    //add bottom of atlantic into our atlantic queue and atlantic visited array
     for(let j=0;j<cols;j++){
        atlanticQueue.push([rows-1,j])
        atlanticVisited[rows-1][j]=true
    } 
    //add right of atlantic into our atlantic queue and atlantic visited array
    for(let i=0;i<rows-1;i++){
        atlanticQueue.push([i,cols-1])
        atlanticVisited[i][cols-1]=true
    }

    const directions = [[1,0],[-1,0],[0,1],[0,-1]]
    const bfs = (queue, visited) => {
        let head = 0
        while(head<queue.length){
            let [r,c]=queue[head++]
            for(let [dr,dc] of directions){
                let nextRow = r+dr
                let nextCol = c+dc
                //check boundary
                if(nextRow<0 || nextRow>=rows
                ||nextCol<0||nextCol>=cols
                ||visited[nextRow][nextCol]
                ){
                    continue
                }
                if(heights[nextRow][nextCol]>=heights[r][c]){
                    queue.push([nextRow,nextCol])
                    visited[nextRow][nextCol]=true
                }
            }
        }
    }

    bfs(pacificQueue, pacificVisited) 
    bfs(atlanticQueue, atlanticVisited) 

    let result = []
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(pacificVisited[i][j] && atlanticVisited[i][j]){
                result.push([i,j])
            }
        }
    }
    return result
    }
}
