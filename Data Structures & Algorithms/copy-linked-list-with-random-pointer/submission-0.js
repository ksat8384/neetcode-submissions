// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let originalToCloneMap = new Map()
        let current = head
        while(current !== null){
            let newNode = new Node(current.val)
            originalToCloneMap.set(current, newNode)
            current = current.next
        }
        current = head
        while(current !== null){
            let newNode= originalToCloneMap.get(current)
            newNode.next = originalToCloneMap.get(current.next)||null
            newNode.random = originalToCloneMap.get(current.random)||null 
            current = current.next
        }
        return originalToCloneMap.get(head) || null
    }
}
