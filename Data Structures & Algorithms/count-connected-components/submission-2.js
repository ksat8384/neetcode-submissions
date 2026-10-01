class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
       let parent = Array.from({length:n},(_,index)=>index)
       let count = n

       const find = (node) =>{
            while(parent[node]!==node){
                node = parent[node]
            }
            return node
       }

       const union = (node1,node2)=>{
        let root1 = find(node1)
        let root2 = find(node2)
            if(root1!==root2){
                parent[root1]=root2//merge
                count--
            }
       }

       for(let [u,v] of edges){
            union(u,v)
       }
       return count

    }
}
