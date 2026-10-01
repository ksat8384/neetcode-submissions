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
        let minHeap = new MinHeap()
        for(let list of lists){
            if(list!==null){
                minHeap.enqueue(list)
            }
        }

        let dummy = new ListNode(-1)
        let tail = dummy
        while(minHeap.size()>0){
           let topNode = minHeap.dequeue()

           tail.next =  topNode
           tail = tail.next

           if(topNode.next!==null) 
                minHeap.enqueue(topNode.next)
        }
        return dummy.next    
    }
}


class MinHeap{
    constructor(){
        this.heap = []
    }
    size(){
        return this.heap.length
    }
    compare(node1, node2){
        return node1.val < node2.val
    }
    enqueue(node){
        this.heap.push(node)
        this.heapifyUp()
    }
    heapifyUp(){
        let index = this.heap.length-1
        while(index>0){
            let parentIndex = Math.floor((index-1)/2)
            if(this.compare(this.heap[index], this.heap[parentIndex])){
                let temp = this.heap[parentIndex]
                this.heap[parentIndex] = this.heap[index]
                this.heap[index]= temp

                index = parentIndex
            }else{
                break;
            }
        }
    }
    dequeue(){
       if(this.heap.length<=0)
            return -1 
       let top = this.heap[0]
       this.heap[0] = this.heap[this.heap.length-1]
       this.heap.pop()
       if(this.heap.length>0)
            this.heapifyDown()
       return top
    }
    heapifyDown(){
        let index = 0
        while(true){
            let smallest = index
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 2
            if(leftChildIndex<this.heap.length 
            && this.compare(this.heap[leftChildIndex], this.heap[smallest])){
                smallest = leftChildIndex
            }
            if(rightChildIndex<this.heap.length 
            && this.compare(this.heap[rightChildIndex], this.heap[smallest])){
                smallest = rightChildIndex    
            }
            if(smallest == index){
                break
            }else{
                let temp = this.heap[smallest]
                this.heap[smallest] = this.heap[index]
                this.heap[index] = temp

                index = smallest
            }
        }
    }

}


