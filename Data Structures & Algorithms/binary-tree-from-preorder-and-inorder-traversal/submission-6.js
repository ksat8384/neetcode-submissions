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
        let preIndex = [0]
        return this.buildTreeRecur(preorder, inorder, preIndex, 0, preorder.length-1)
    }

    buildTreeRecur (preOrder, inOrder, preIndex, left, right){
        if(left>right)
            return null
        let rootVal = preOrder[preIndex[0]]
        preIndex[0]++
        let root = new TreeNode(rootVal)
        let index = this.search(inOrder, rootVal, left, right)  

        root.left = this.buildTreeRecur(preOrder, inOrder, preIndex, left, index-1)
        root.right = this.buildTreeRecur(preOrder, inOrder, preIndex, index+1, right)
        return root 
    }

    search(inOrder, rootVal, left, right){
        for(let i=left; i<=right; i++){
            if(inOrder[i]==rootVal)
                return i
        }
        return -1
    }
}
