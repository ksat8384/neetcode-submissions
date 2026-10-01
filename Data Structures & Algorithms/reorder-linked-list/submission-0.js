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
        let head2 = slow.next
        slow.next = null

        console.log("head2 = ", head2)

        let prev = null
        let current = head2
        while(current){
           let next = current.next
           current.next = prev
           prev = current
           current = next 
        }
        head2 = prev

        console.log("head = ", head)
       

        while(head && head2){
           let temp = head.next
           let temp2= head2.next

           head.next = head2
           head2.next = temp

           head = temp 
           head2 = temp2
        }
        return head        
    }
}
