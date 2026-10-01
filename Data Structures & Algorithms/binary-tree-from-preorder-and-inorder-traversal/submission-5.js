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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let inorderIndexMap = new Map()
        inorder.forEach((item, index)=>inorderIndexMap.set(item, index))

        let preorderIndex = 0

        const constructBinaryTree = (inLeft, inRight)=>{
            if(inLeft > inRight){
                return null
            }
            let rootVal = preorder[preorderIndex]
            let mid = inorderIndexMap.get(rootVal)
            let root = new TreeNode(rootVal)
            preorderIndex++
            root.left = constructBinaryTree(inLeft, mid-1)
            root.right = constructBinaryTree(mid+1, inRight)
            return root
        }
        return constructBinaryTree(0, inorder.length-1)
    }

}
