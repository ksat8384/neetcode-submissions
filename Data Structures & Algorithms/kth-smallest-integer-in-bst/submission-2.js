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
        let result = -1
        let count = 0
        const inOrderDFS = (root) => {
            if(root == null || result !== -1)
                return
            inOrderDFS(root.left)   
            count++
            if(count === k){
                result = root.val
                return
            }    
            inOrderDFS(root.right)  
        }
        inOrderDFS(root)
        return result
    }
    
   
}
