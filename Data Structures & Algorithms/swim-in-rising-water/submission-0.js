class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        let n = grid.length
        let visited = new Set()
        //djikshtra algo - shortest path
        let minHeap = new MinPriorityQueue((entry)=>entry[0])//[height, row, col]. Max height it took to reach that cell.
        minHeap.push([grid[0][0],0,0])//[height, row, col]
        visited.add("0,0")
        //bfs
        const directions = [[1,0],[-1,0],[0,1],[0,-1]]
        while(minHeap.size()> 0){
           let [height, row, col] = minHeap.pop()
          
           if(row===n-1 && col ===n-1)
                return height
            for (let [dr, dc] of directions){
                let neighRow = dr+row
                let neighCol = dc+col
                let neighKey = `${neighRow},${neighCol}`
                if(neighRow<0 || neighRow>=n || neighCol<0 || neighCol>=n || visited.has(neighKey))
                    continue
                let maxHeight = Math.max(height, grid[neighRow][neighCol])
                minHeap.push([maxHeight, neighRow, neighCol])
                visited.add(neighKey)
            }
        }
        return -1
    }
  
}
