class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let pQueue = []
        let pSeen = new Set()

        let aQueue = []
        let aSeen = new Set()

        let rows = heights.length
        let cols = heights[0].length

        const getKey = (i,j)=>`${i},${j}`

       //add top row to pacific queue and pacific seen
        for(let j=0;j<cols;j++){
            pQueue.push([0,j])
            pSeen.add(getKey(0,j))
        }
        //add left column to pacific queue and pacific seen
        for(let i=1;i<rows;i++){
            pQueue.push([i,0])
            pSeen.add(getKey(i,0))
        }

         //add right column to atlantic queue and atlantic seen
         for(let i=0;i<rows;i++){
            aQueue.push([i,cols-1])
            aSeen.add(getKey(i,cols-1))
         }
         //add bottom row to atlantic queue and atlantic seen
         for(let j=0; j<cols-1;j++){
            aQueue.push([rows-1,j])
            aSeen.add(getKey(rows-1,j))
         }


        const directions = [[1,0],[-1,0],[0,1],[0,-1]]
         const bfs = (queue, seen)=>{
            let head = 0
            while(head<queue.length){
                let [r,c] = queue[head++]
                for(let [dr,dc] of directions){
                    let nextRow = r+dr
                    let nextCol = c+dc
                    //check boundary
                    if(nextRow<0 ||nextRow>=rows 
                    ||nextCol<0 || nextCol>=cols            
                    ||seen.has(getKey(nextRow,nextCol))
                    ){
                        continue
                    }
                    if(heights[nextRow][nextCol]>=heights[r][c]){
                        queue.push([nextRow, nextCol])
                        seen.add(getKey(nextRow, nextCol))
                    }
                }
            }
         }

         bfs(pQueue, pSeen)
         bfs(aQueue, aSeen)
        let result = []
        for(let i=0; i<rows; i++){
            for(let j=0;j<cols;j++){
                if(pSeen.has(getKey(i,j)) && aSeen.has(getKey(i,j))){
                    result.push([i,j])    
                }
            }
        }
        return result

    }
}
