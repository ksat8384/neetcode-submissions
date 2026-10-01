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
        let dummy = new ListNode(0, head)
        let groupPrev = dummy
        while(true){
            let kth = this.getKthNode(groupPrev, k)
            if(kth === null){
                break;
            }
            let groupNext = kth.next
            //reverse current group
            let prev = kth.next
            let current = groupPrev.next
            while(current !== groupNext){
                let next = current.next
                current.next = prev

                prev = current
                current = next
            }
            //current group first node
            let temp = groupPrev.next
            //current group last node will become first node
            groupPrev.next = kth
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
        return current
    }
}
