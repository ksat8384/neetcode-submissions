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
     * @return {void}
     */
    reorderList(head) {
        let slow = head
        let fast = head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        let temp = slow.next
        slow.next = null

        //reverse temp
        let prev = null
        let current = temp
        while(current){
            let next = current.next
            current.next = prev

            prev = current
            current = next
        }
        let head1 = head
        let head2 = prev
       
        while(head1 && head2){
           let temp1 = head1.next
           let temp2 = head2.next

           head1.next = head2
           head2.next = temp1

           head1 = temp1
           head2 = temp2
        }
    }
}

