class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let adjacencyList = Array.from({length:n}, ()=>[])
        for(let [n1,n2] of edges){
            adjacencyList[n1].push(n2)
            adjacencyList[n2].push(n1)
        }
        let visited = new Set()
        const dfs = (currentNode, prevNode)=>{
            visited.add(currentNode)
            for(let neighbor of adjacencyList[currentNode]){
                if(neighbor === prevNode){
                    continue
                }
                if(visited.has(neighbor)){
                    return true
                }
                if(dfs(neighbor, currentNode)){
                    return true
                }
            }
            return false
        }
        return !dfs(0, -1) && visited.size === n
    }
}
