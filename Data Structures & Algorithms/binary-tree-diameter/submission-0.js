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
    diameterOfBinaryTree(root) {
        let res = 0

        const dfs = (root) => {
            if(!root){
                    return 0
            }
            let leftHeight = dfs(root.left)
            let rightHeight = dfs(root.right)
            res = Math.max(res, leftHeight + rightHeight)
            return 1 + Math.max(leftHeight, rightHeight)
        }

        dfs(root)
        return res

    }


}
