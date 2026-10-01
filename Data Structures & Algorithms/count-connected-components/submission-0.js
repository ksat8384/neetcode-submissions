class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adjacencyList = Array.from({length:n}, ()=>[])
        for(let [u,v] of edges){
            adjacencyList[u].push(v)
            adjacencyList[v].push(u)
        }
        let visited = new Set()
        const dfs = (node, visited)=>{
            visited.add(node)
            for(let neighbor of adjacencyList[node]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    dfs(neighbor, visited)
                }
            }
        }
        let connectedComponentsCount = 0
        for(let i=0; i<n; i++){
            if(!visited.has(i)){
                connectedComponentsCount++
                dfs(i, visited)
            }
        }
        return connectedComponentsCount
    }
}
