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
        if (head === null) {
            return null;
        }
        let current = head
        while(current!==null)
        {
            let newNode = new Node(current.val)
            newNode.next = current.next
            current.next = newNode
            current = newNode.next
        }
        current = head
        while(current!==null){
            if(current.random!==null){
                current.next.random = current.random.next
            }
            current = current.next.next
        }
        current = head
        let clonedHead = head.next
        let clone = clonedHead
        while(clone.next !== null){
            current.next = current.next.next
            clone.next = clone.next.next 

            clone = clone.next
            current = current.next
        }
        clone.next = null
        current.next = null
        return clonedHead
    }
}
