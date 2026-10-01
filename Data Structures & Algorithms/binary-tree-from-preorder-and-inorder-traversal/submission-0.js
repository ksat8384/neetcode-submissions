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
        if(preorder.length == 0 || inorder.length==0)
            return null

    let preOrderIndex = [0]    
    const constructBinaryTree = (preorder, inorder, preOrderIndex, inOrderLeftIndex, inOrderRightIndex) => {
        if(inOrderLeftIndex > inOrderRightIndex){
            return null
        }
        let rootVal = preorder[preOrderIndex[0]]
        let mid = this.search(inorder, rootVal, inOrderLeftIndex, inOrderRightIndex)
        let root = new TreeNode(rootVal)
        preOrderIndex[0]++
        root.left = constructBinaryTree(preorder, inorder, preOrderIndex, inOrderLeftIndex, mid-1)
        root.right = constructBinaryTree(preorder, inorder, preOrderIndex, mid+1, inOrderRightIndex)
        return root
    }

    return constructBinaryTree(preorder, inorder, preOrderIndex, 0, inorder.length-1)
    }

    search = (inOrder, rootVal, left, right) =>{
        for(let i=left; i<=right; i++){
            if(inOrder[i]===rootVal){
                return i
            }
        }
        return -1
    }

    


}
