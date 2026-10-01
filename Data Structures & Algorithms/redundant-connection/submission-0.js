class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        let n = edges.length
        let parent = Array.from({length:n+1},(_,index)=>index)
        const find = (node)=>{
            while(parent[node]!==node){
                node = parent[node]
            }
            return node
        } 
        const union = (node1, node2)=>{
            let root1 = find(node1) 
            let root2 = find(node2) 
            //already connected
            if(root1===root2){
                return false
            }
            parent[root1]=root2 
            return true
        }

        for(let[u,v] of edges){
            if(!union(u,v)){
                return [u,v]
            }
        }
      
    }
}
