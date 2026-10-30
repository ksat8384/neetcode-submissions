class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        let n = points.length
       let adjList = Array.from({length: n}, ()=>[])// src point index -> [destn point index, cost]
       for(let i=0; i<n; i++){
        let [xi,yi]= points[i]
         for(let j=i+1;j<n;j++){
            let [xj,yj]= points[j]
            let cost = Math.abs(xi-xj)+Math.abs(yi-yj)
            //undirectional, so it could go both ways
            adjList[i].push([j, cost])
            adjList[j].push([i, cost])
         }
       }

       //Minimum spanning tree (MST)
       //Prim's algorithm
       let visited = new Set()
       let minHeap = new MinPriorityQueue((entry) => entry[0])// [cost, node] cost to reach that node
       minHeap.push([0,0])

       let totalCost = 0 
       while(visited.size<n){
            let [uCost, uNode] = minHeap.pop()
            if(visited.has(uNode))
                continue
            visited.add(uNode)    
            totalCost += uCost
            for(let neighbor of adjList[uNode]){
                let [vNode, vCost] = neighbor
                if(!visited.has(vNode)){
                    minHeap.push([vCost, vNode])
                }
            }
       }
        return totalCost

    }
}

