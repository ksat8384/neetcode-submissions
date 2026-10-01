class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // if(edges.length !== n-1)
        //     return false
       let adjacencyList = Array.from({length:n}, ()=>[])
       for(let [n1,n2] of edges){
            adjacencyList[n1].push(n2)
            adjacencyList[n2].push(n1)
       }
       let visited = new Set()
       visited.add(0)
       let queue = []
       queue.push([0,-1])
        let head = 0
       while(head < queue.length){
            let [node, parentNode] = queue[head++]
            for(let neighbor of adjacencyList[node]){
                //skip the edge pointing straight back to parnet
                if(neighbor===parentNode)
                    continue
                //if visted has a neighbor that is not parent, loop exist
                if(visited.has(neighbor)){
                    return false
                }
                visited.add(neighbor)
                queue.push([neighbor, node])    
            }
       }
       return visited.size===n
    }
}
