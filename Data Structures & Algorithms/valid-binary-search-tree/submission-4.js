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
        let prev = [-Infinity]
        return this.inOrder(root, prev)
    }
    inOrder(root, prev){
        if(root==null)
            return true
        if(!this.inOrder(root.left, prev))
            return false
        if(prev[0]>=root.val){
            return false
        }
        prev[0]=root.val
        return this.inOrder(root.right, prev)   
    }
}
