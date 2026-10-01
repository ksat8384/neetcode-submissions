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
      let originalToCloneMap = new Map()
      originalToCloneMap.set(node, new Node(node.val))
      let queue = []
      queue.push(node)

      while(queue.length>0){
         let topNode = queue.shift()
         for(let neighbor of topNode.neighbors){
            if(!originalToCloneMap.has(neighbor)){
                originalToCloneMap.set(neighbor, new Node(neighbor.val))
                queue.push(neighbor)
            }
             originalToCloneMap.get(topNode).neighbors.push(originalToCloneMap.get(neighbor))
         }
      }
      return originalToCloneMap.get(node)  
    }
}
