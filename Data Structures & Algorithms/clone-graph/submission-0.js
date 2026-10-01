/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node)
            return node
        let originalToClonedMap = new Map()
        originalToClonedMap.set(node, new Node(node.val))
        let queue = []
        queue.push(node)

        while(queue.length>0){
           let topNode = queue.shift()
           for(let neighbor of topNode.neighbors){
                if(!originalToClonedMap.has(neighbor)){
                    let neighborClone = new Node(neighbor.val)
                    originalToClonedMap.set(neighbor, neighborClone)
                    queue.push(neighbor)
                }
            originalToClonedMap.get(topNode).neighbors.push(originalToClonedMap.get(neighbor))
           }
        }
        return originalToClonedMap.get(node)
        
    }
}
