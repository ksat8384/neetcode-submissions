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
    maxDepth(root) {
        if(root==null)
            return 0
        return this.bfs(root)
    }

    bfs(root){
        let queue = [root]
        let count = 0
        
        while(queue.length>0){
            let length = queue.length
             count++
            while(length>0){
                let top = queue.shift()

                if(top.left!==null){
                    queue.push(top.left)
                }
                if(top.right!==null){
                    queue.push(top.right)
                }
                length--
            }
           
        }
        return count
    }
}
