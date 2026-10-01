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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        // let head1 = this.reverse(l1)
        // let head2 = this.reverse(l2)

        let head1 = l1
        let head2 = l2

        let reminder = 0
        let dummy = new ListNode(-1)
        let tail = dummy

        while(head1 || head2 || reminder){
           let val1 = head1? head1.val : 0
           let val2 = head2? head2.val : 0 
           let total = reminder + val1 + val2
           let sum = total % 10
           reminder = Math.floor(total / 10)

           tail.next = new ListNode(sum) 
           tail = tail.next

           if(head1) 
                head1 = head1.next
           if(head2)     
                head2 = head2.next
        }
        return dummy.next
    }

    reverse(head){
        let prev = null
        let current=head
        while(current){
            let next = current.next
            current.next = prev

            prev = current
            current = next
        }
        return prev
    }
}
