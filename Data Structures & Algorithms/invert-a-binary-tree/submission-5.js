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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root)
            return null

        return this.bfs(root)
    }

    bfs(root){
       let queue = [root]
       while(queue.length>0){
           let top = queue.shift()
           
           let temp = top.left
           top.left = top.right
           top.right = temp

           if(top.left){
                queue.push(top.left)
           }
           if(top.right){
                queue.push(top.right)
           }
       }
       return root
    }
}
