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
        const preOrderSerialization = (root) => {
            if(root===null){
                res.push("null")
                return
            }
            res.push(root.val)
            preOrderSerialization(root.left)
            preOrderSerialization(root.right)
        }

        preOrderSerialization(root)
        return res.join(',')
    }

    

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let arr = data.split(",")

        let index = 0    
        const preOrderDeserialization = (arr) => {
            if(arr[index]=="null"){
                index++
                return null
            }
            let root = new TreeNode(parseInt(arr[index]))
            index++
            root.left = preOrderDeserialization(arr)
            root.right = preOrderDeserialization(arr)
            return root
        }
        return preOrderDeserialization(arr)
    }
}
