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
        let list1 = head
        let list2 = prev
        let dummy = new ListNode(-1)
        let tail = dummy
        let i=0
        while(list1 && list2){
            if(i%2===0){
                tail.next=list1
                list1=list1.next
            }else{
                tail.next=list2
                list2=list2.next
            }
            tail = tail.next
            i++
        }
        tail.next = list1 || list2

        return dummy.next
    }
}
