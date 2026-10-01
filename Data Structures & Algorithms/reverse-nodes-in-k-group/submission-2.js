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
        let current = head
        let values = []
        while(current){
            values.push(current.val)
            current = current.next
        }
        for(let i=0; i+k<=values.length;i=i+k){
            let left = i
            let right = i+k-1
            while(left<right){
                let temp = values[left]
                values[left]=values[right]
                values[right]=temp
                left++
                right--
            }
        }
        let dummy = new ListNode(-1)
        let tail = dummy
        for(let value of values){
            tail.next = new ListNode(value)
            tail = tail.next
        }
        return dummy.next
    }
       
}
