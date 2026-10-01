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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        let queue = []
        queue.push(root)
        while(queue.length>0){
            let top = queue.shift()
            if(this.isSameTree(top, subRoot))
                return true
            if(top.left){
                queue.push(top.left)
            } 
            if(top.right){
                queue.push(top.right)
            } 
        }
        return false
    }
    isSameTree(p, q){
        if(!p && !q)
            return true
        if(!p || !q )
            return false    
        return p.val == q.val && this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right)
    }
}
