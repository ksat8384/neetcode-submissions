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
     * @return {boolean}
     */
    isValidBST(root) {
        let prev = -Infinity
         const inOrderDfs =(root) => {
            if(root == null)
                return true
            let left = inOrderDfs(root.left)  
            if(left == false)
                return false   
            let current = root.val
            if(prev>=current)
                return false
            prev = current   
            let right = inOrderDfs(root.right)
            if(right == false)
                return false
            return true
        }
        return inOrderDfs(root)
    }
}
