class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        let n = grid.length
        let visited = new Set()
        //Djikshtra
        let minHeap = new MinPriorityQueue((entry)=>entry[0])//[maxHeight, row, col]
        minHeap.push([grid[0][0],0,0])
        visited.add("0,0")
        const directions = [[0,1],[0,-1],[1,0],[-1, 0]]

        while(minHeap.size()>0){
            let [height, row, col] = minHeap.pop()
            if(row===n-1 && col===n-1)
                return height
             for(let [dr,dc] of directions){
                 let neighRow = row+dr
                 let neighCol = col+dc
    
                 let neighKey = `${neighRow},${neighCol}`
                 //check bounds
                 if(neighRow<0 || neighRow>=n ||neighCol<0 ||neighCol>=n || visited.has(neighKey))
                    continue
                let maxHeight = Math.max(height, grid[neighRow][neighCol])  

                visited.add(neighKey) 
                minHeap.push([maxHeight,neighRow,neighCol])  
             }   

        }
       return -1
    }
  
}
