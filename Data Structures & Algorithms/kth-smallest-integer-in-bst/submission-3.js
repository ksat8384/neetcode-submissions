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
        let count = 0
        const inOrderDfs = (root, k)=>{
            if(root == null)
                return -1
            let left = inOrderDfs(root.left, k)   
            if(left !== -1)
                return left  
            count++
            if(count===k){
                return root.val
            }
           return inOrderDfs(root.right, k) 
        }

        return inOrderDfs(root, k)
    }
    
}
