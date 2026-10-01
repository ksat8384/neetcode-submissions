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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if(root == null || p == null || q == null)
            return null

        return this.dfs(root, p, q)    
    }
    dfs(root, p , q){
        if(root==null)
            return null
        if(p.val > root.val && q.val > root.val){
            //go right
           return this.dfs(root.right, p, q)
        }else if(p.val < root.val && q.val < root.val){
            //go left
           return this.dfs(root.left, p ,q)
        }
        return root    
    }
}
