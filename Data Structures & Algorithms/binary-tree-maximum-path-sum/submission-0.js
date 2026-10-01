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
     * @return {number}
     */
    maxPathSum(root) {
       let res = Number.MIN_SAFE_INTEGER

        const postOrderTraversalDFS = (root)=>{
            if(root == null)
                return 0
            let leftMax = Math.max(0, postOrderTraversalDFS(root.left)) 
            let rightMax = Math.max(0, postOrderTraversalDFS(root.right))  
            
            res = Math.max(res, root.val + leftMax + rightMax)

            return root.val + Math.max(leftMax, rightMax)  
        }

        postOrderTraversalDFS(root)

        return res

        
    }

   
}
