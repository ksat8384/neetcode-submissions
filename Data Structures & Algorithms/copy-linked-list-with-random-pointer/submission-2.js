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
        let current = head
        let map = new Map()
        let dummy = new Node(-1, head)
        let tail = dummy
        while(current){
            let newNode = new Node(current.val)
            map.set(current, newNode)
            current = current.next

            tail.next = newNode
            tail = tail.next
        }
        current = head
        while(current){
            map.get(current).random = map.get(current.random)
            current = current.next
        } 
        return dummy.next      
    }
}
