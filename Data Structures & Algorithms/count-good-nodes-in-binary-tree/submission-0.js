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
      let stack = []
      let goodNodes = 0
      stack.push({root: root, largest:-Infinity})  
      while(stack.length>0){
        let {root, largest} = stack.pop()
        if(largest <= root.val){
            goodNodes++
        }
        largest = Math.max(largest, root.val)
        if(root.left!==null){
            stack.push({root:root.left, largest})
        }
        if(root.right!==null){
            stack.push({root:root.right, largest})
        }
      }
      return goodNodes
    }
}
