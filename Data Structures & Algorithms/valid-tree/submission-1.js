class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length !== n-1)
            return false
       let adjacencyList = Array.from({length:n}, ()=>[])
       for(let [n1,n2] of edges){
            adjacencyList[n1].push(n2)
            adjacencyList[n2].push(n1)
       }
       let visited = new Set()
       visited.add(0)
       let queue = []
       queue.push(0)

       while(queue.length>0){
            let topNode = queue.shift()
            for(let neighbor of adjacencyList[topNode]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
       }
       return visited.size===n
    }
}
