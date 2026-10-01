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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root)
         return []
        return this.bfs(root)
    }

    bfs(root){
       let queue = [root]
       let result = []
       while(queue.length>0){
         let levelSize = queue.length
         for(let i=0; i<levelSize; i++){
            let top = queue.shift()
            if(i===levelSize-1){
                result.push(top.val)
            }
            if(top.left!==null){
                queue.push(top.left)
            }
             if(top.right!==null){
                queue.push(top.right)
            }
         }
       }
       return result
    }
}
