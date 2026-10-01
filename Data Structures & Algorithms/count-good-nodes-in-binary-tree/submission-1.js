/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        if (!root) 
            return 0; 
      let stack = []
      let goodNodes = 0
      stack.push({node: root, largest:-Infinity})  
      while(stack.length>0){
        let {node, largest} = stack.pop()
        if(largest <= node.val){
            goodNodes++
        }
        largest = Math.max(largest, node.val)
        if(node.left!==null){
            stack.push({node:node.left, largest})
        }
        if(node.right!==null){
            stack.push({node:node.right, largest})
        }
      }
      return goodNodes
    }
}
