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
            if(kth == null)
                break;
            let groupNext = kth.next
            //reverse group
            let previous = kth.next
            let current = groupPrev.next
            while(current!==groupNext){
                let next = current.next
                current.next = previous
                previous=current
                current=next
            }

            //first node in our group
            let temp = groupPrev.next
            //kth is the last node in our group, has now become first node in our group
            groupPrev.next = kth
            groupPrev = temp
        }
        return dummy.next
    }

    getKthNode(current, k){
        while(current!==null && k>=1){
            current = current.next
            k--
        }
        return current
    }
}
