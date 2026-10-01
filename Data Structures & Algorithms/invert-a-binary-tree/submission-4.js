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
           let leftNode = top.left
           let rightNode = top.right
           if(leftNode && rightNode){
              top.left = rightNode
              top.right = leftNode
           }else if(leftNode){
              top.right = leftNode
              top.left = null
           }else{
              top.left = rightNode
              top.right = null
           } 

           if(leftNode){
             queue.push(leftNode)
           }
           if(rightNode){
            queue.push(rightNode)
           }
       }
       return root
    }
}
