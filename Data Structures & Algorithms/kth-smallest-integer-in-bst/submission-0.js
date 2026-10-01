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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        if(!root)
            return -1
        let count = 0
        let result = -1
        const dfsInOrderTraversal=(root)=>{
            if(!root || result !== -1)
                return 
            dfsInOrderTraversal(root.left)
            count++   
            if(count===k){
                result = root.val
                return
            }
            dfsInOrderTraversal(root.right)
        }
        dfsInOrderTraversal(root)
        return result
    }
    
   
}
