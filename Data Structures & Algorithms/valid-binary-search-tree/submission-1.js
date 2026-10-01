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
        return this.dfs(root, -Infinity, Infinity)
    }
    dfs(root, min, max){
        if(!root)
            return true
        let val = root.val
        if(val<min || val>max){
            return false
        }
        return this.dfs(root.left, min, val-1) && this.dfs(root.right, val+1, max)
    }
}
