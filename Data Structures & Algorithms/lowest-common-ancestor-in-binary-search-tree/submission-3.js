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
        let lca = [root]

          const dfs = (root, p , q)=>{
                if(root==null)
                    return 
                lca[0]=root    
                if(p.val > root.val && q.val > root.val){
                    //go right
                    dfs(root.right, p, q)
                }else if(p.val < root.val && q.val < root.val){
                    //go left
                    dfs(root.left, p ,q)
                }
                return     
            }


        dfs(root, p, q)  
        return lca[0]
    }
  
}
