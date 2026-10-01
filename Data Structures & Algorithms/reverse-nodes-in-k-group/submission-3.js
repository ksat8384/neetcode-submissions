/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let dummy = new ListNode(-1, head)
        let groupPrev = dummy
        while(true){
           let kthNode = this.getKthNode(groupPrev, k)
           if(kthNode===null)
                break
            let groupNext = kthNode.next    
           //reverse group
           let prev = kthNode.next
           let current = groupPrev.next
           while(current !== groupNext){
                let next = current.next
                current.next = prev

                prev = current
                current = next
           }
           let temp = groupPrev.next 
           groupPrev.next = kthNode
           groupPrev = temp
        }
        return dummy.next
        
    }
    getKthNode(head, k){
        let current = head
        while(current!==null && k>=1){
            current = current.next
            k--
        }
        return current !== head? current : null
    }
}
