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

        const search=(root)=>{
            if(!root)
                return
            lca[0] = root    
            if(root.val<p.val && root.val<q.val){
                search(root.right)
            }else if(root.val>p.val && root.val>q.val){
                search(root.left)
            }else{
                return
            }  
        }   

        search(root)   
        return lca[0]
    }

   
}
