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
        this.dfs(root)
        return root
    }
    dfs(root){
        if(!root)
            return
        let left = root.left   
        let right = root.right 
        root.left = right
        root.right = left
        this.dfs(root.left)
        this.dfs(root.right)
    }
}
