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

        let preorderIndex = [0]
        
        return this.constructBinaryTree(preorder, preorderIndex, inorder, inorderIndexMap, 0, inorder.length-1)
    }

    constructBinaryTree(preorder, preorderIndex, inorder, inorderIndexMap, inLeft, inRight){
            if(inLeft > inRight){
                return null
            }
            let rootVal = preorder[preorderIndex[0]]
            let mid = inorderIndexMap.get(rootVal)
            let root = new TreeNode(rootVal)
            preorderIndex[0]++
            root.left = this.constructBinaryTree(preorder, preorderIndex, inorder, inorderIndexMap, inLeft, mid-1)
            root.right = this.constructBinaryTree(preorder, preorderIndex, inorder, inorderIndexMap, mid+1, inRight)
            return root
    }

}
