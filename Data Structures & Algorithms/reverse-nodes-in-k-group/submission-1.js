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
        let previousGroupTail = dummy

        while(previousGroupTail !==null ){
            let current = previousGroupTail
            for(let i=0; i<k; i++){
                current = current.next
                if(current == null){
                    return dummy.next
                }
            }
            //
            let currentGroupHead = previousGroupTail.next
            let nextGroupHead = current.next
            current.next = null
            previousGroupTail.next = this.reverse(currentGroupHead)
            currentGroupHead.next = nextGroupHead
            previousGroupTail = currentGroupHead
        }
        return dummy.next
    }

    reverse(current){
        let previous  = null
        while(current !== null){
            let next = current.next
            current.next = previous
            previous = current
            current = next
        }
        return previous
    }
}
