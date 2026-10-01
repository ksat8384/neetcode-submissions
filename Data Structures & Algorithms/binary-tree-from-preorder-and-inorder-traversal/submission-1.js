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
        inorder.map((item, index)=>inorderIndexMap[item]=index)

        let preorderIndex = [0]
        const constructBinaryTree = (preorder, preorderIndex, inorder, inorderIndexMap, inLeft, inRight)=>{
            if(inLeft > inRight){
                return null
            }
            let rootVal = preorder[preorderIndex[0]]
            let mid = inorderIndexMap[rootVal]
            let root = new TreeNode(rootVal)
            preorderIndex[0]++
            root.left = constructBinaryTree(preorder, preorderIndex, inorder, inorderIndexMap, inLeft, mid-1)
            root.right = constructBinaryTree(preorder, preorderIndex, inorder, inorderIndexMap, mid+1, inRight)
            return root
        }
        return constructBinaryTree(preorder, preorderIndex, inorder, inorderIndexMap, 0, inorder.length-1)
    }

}
