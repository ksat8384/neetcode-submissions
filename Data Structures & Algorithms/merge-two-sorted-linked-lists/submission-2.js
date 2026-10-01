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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode(-1)
        let current = dummy
        while(list1 && list2){
            if(list1.val < list2.val){
                current.next = new ListNode(list1.val)
                list1 = list1.next
            }else{
                current.next = new ListNode(list2.val)
                list2 = list2.next
            }
            current = current.next
        }
        while(list1){
            current.next = new ListNode(list1.val)
            list1 = list1.next
            current = current.next
        }
        while(list2){
            current.next = new ListNode(list2.val)
            list2 = list2.next
            current = current.next
        }
        return dummy.next
    }
}
