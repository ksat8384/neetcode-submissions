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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
       let res = []
       this.dfs(root, res)
       return res.join(",")
    }

    dfs(root, res){
        if(root==null){
            res.push("null")
            return
        }
        res.push(root.val)    
        this.dfs(root.left, res)
        this.dfs(root.right, res)
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
       let inputArray = data.split(",")
       let index = 0
      
        const buildTree = () => {
            if(inputArray[index] == "null"){
                index++
                return null
            }
           
            let root = new TreeNode(parseInt(inputArray[index]))
            index++
            root.left = buildTree()
            root.right = buildTree()
            return root    
        }
        return buildTree()
    }

   
}
