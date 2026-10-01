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
        if(preorder === null || inorder === null)
            return null
        let inOrderMap = new Map()
        inorder.forEach((item, index)=>inOrderMap.set(item,index))
        let preIndex = [0]
        return this.buildTreeRecur(preorder, preIndex, inOrderMap, 0, preorder.length-1)
        
    }

    buildTreeRecur(preOrder, preIndex, inOrderMap, left, right){
        if(left>right)
            return null
        let rootVal = preOrder[preIndex[0]]
        preIndex[0]++
        let root = new TreeNode(rootVal)
        let index = inOrderMap.get(rootVal)
        root.left = this.buildTreeRecur(preOrder, preIndex, inOrderMap, left, index-1)
        root.right = this.buildTreeRecur(preOrder, preIndex, inOrderMap, index+1, right)
        return root    
    }
}
