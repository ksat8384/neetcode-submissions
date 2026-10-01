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
        if(!root)
            return []
        let queue = []
        queue.push(root)
        let result = []
        let level=0
        while(queue.length>0){
            let length = queue.length
            result.push([])
            for(let i=0; i<length; i++){
                 let top = queue.shift()
                 result[level].push(top.val)
                 if(top.left){
                    queue.push(top.left)
                 }  
                 if(top.right){
                    queue.push(top.right)
                 } 
            }
            level++    
          
        }
        return result
    }
}
