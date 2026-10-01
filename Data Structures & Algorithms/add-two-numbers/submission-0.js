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
        let carry=0
        let dummy = new ListNode()
        let current = dummy
        while(l1!==null || l2!==null || carry!==0){
            let newVal = carry
            if(l1!==null){
                newVal += l1.val
                l1 = l1.next
            }
            if(l2!==null){
                newVal += l2.val
                l2 = l2.next
            }
            carry = Math.floor(newVal/10)
            let newNode = new ListNode(newVal%10)
            current.next = newNode
            current = current.next
        }
        return dummy.next
    }
}
