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
            return null
        let originalToClonedMap = new Map()
        let queue = []
        queue.push(node)
        originalToClonedMap.set(node, new Node(node.val))

        while(queue.length>0){
            let topNode = queue.shift()
            for(let neighbor of topNode.neighbors){
                if(!originalToClonedMap.has(neighbor)){
                    originalToClonedMap.set(neighbor, new Node(neighbor.val))
                    queue.push(neighbor)
                }
                originalToClonedMap.get(topNode).neighbors.push(originalToClonedMap.get(neighbor))
            }
        }
        return originalToClonedMap.get(node)


    }
}
