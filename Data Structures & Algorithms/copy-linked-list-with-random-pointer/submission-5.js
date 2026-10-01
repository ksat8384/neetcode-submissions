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
        if (!head) return null;

        let current = head
        let map = new Map()
        while(current){
            let newNode = new Node(current.val)
            map.set(current, newNode)
            current = current.next
        }
        current = head
        while(current){
            map.get(current).random = map.get(current.random)?? null
            map.get(current).next = map.get(current.next)??null
            current = current.next
        } 
        return map.get(head)   
    }
}
