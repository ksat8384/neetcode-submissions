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
        let queue = [root]
        while(queue.length>0){
            let length = queue.length
          for(let i=0; i<length; i++){
             let top = queue.shift()
               if(this.isSameTree(top, subRoot)){
                return true
                }
            if(top.left!==null)
                queue.push(top.left)
             if(top.right!==null)    
                queue.push(top.right)
          }
        }
        return false
    }

    isSameTree(p,q){
        if(p==null && q==null)
            return true
        if(p==null && q!==null)
            return false
        if(p!==null && q==null)
            return false
        if(p.val !== q.val)
            return false
        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right)               
    }
}
