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
      return this.preOrderDfs(root, -Infinity, Infinity)
    }

    preOrderDfs(root, min, max){
        if(root==null)
            return true
        let val = root.val 
        if(val<=min || val>=max)
            return false   
        let left = this.preOrderDfs(root.left, min, val)
        if(left == false)
            return false
        return this.preOrderDfs(root.right, val, max)    
    }

}
