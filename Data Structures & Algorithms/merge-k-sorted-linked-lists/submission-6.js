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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists || lists.length === 0) 
            return null
        while(lists.length>1){
            let mergedLists = []
            for(let i=0; i<lists.length; i=i+2){
                let list1 = lists[i]
                let list2= i+1<lists.length? lists[i+1]: null
                mergedLists.push(this.mergeTwoSortedList(list1,list2))
            }
            lists=mergedLists
        }
        return lists[0]
    }

    mergeTwoSortedList(list1, list2){
        let dummy = new ListNode(-1)
        let tail = dummy
        while(list1 && list2){
            if(list1.val<list2.val){
                tail.next = list1
                list1 = list1.next
            }else{
                tail.next = list2
                list2 = list2.next
            }
            tail = tail.next
        }
        if(list1!==null)
            tail.next = list1
         if(list2!==null)
            tail.next = list2    

         return dummy.next
    }
   
}


