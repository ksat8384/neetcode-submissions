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
     * @return {number[]}
     */
    rightSideView(root) {
       return this.bfs(root)
    }

    bfs(root){
         if(root == null)
            return []
        let queue = [root]
        let res = []
        while(queue.length>0){
            let length = queue.length
            for(let i=0; i<length; i++){
                let top = queue.shift()
                if(i===length-1)
                    res.push(top.val)
                if(top.left!==null)
                    queue.push(top.left)
                if(top.right!==null)
                    queue.push(top.right)    
            }
        } 
        return res   
    }

}
