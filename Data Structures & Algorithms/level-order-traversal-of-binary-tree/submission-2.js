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
     * @return {number[][]}
     */
    levelOrder(root) {
      return this.bfs(root)
    }
    bfs(root){
      if(root == null)
        return []
      let queue = [root]
      let res = []
      let queuePointer = 0
      while(queuePointer < queue.length){
        let length = queue.length - queuePointer
        let currentLevel = []
        for(let i=0; i<length; i++){
            let top = queue[queuePointer++]
            currentLevel.push(top.val)
            if(top.left!==null)
                queue.push(top.left)
            if(top.right!==null)
                queue.push(top.right)    
        }
        res.push(currentLevel)
      }
      return res
    }
}
