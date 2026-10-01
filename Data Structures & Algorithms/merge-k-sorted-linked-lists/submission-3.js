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
        let minHeap = new MinHeap((n1,n2)=>n1.val<=n2.val)
        for(let head of lists){
            if(head){
                minHeap.enqueue(head)
            }
        }
        let dummy = new ListNode(-1)
        let tail = dummy
        while(minHeap.getSize()>0){
           let top = minHeap.dequeue()
           tail.next = new ListNode(top.val)
           tail = tail.next
            if(top.next)
                minHeap.enqueue(top.next)
        }
        return dummy.next
    }
}

class MinHeap{
    constructor(compare){
        this.data = []
        this.compare = compare
    }
    getSize(){
        return this.data.length
    }
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    getLeftChildIndex(index){
        return 2 * index + 1
    }
    getRightChildIndex(index){
        return 2 * index + 2
    }
    enqueue(node){
        this.data.push(node)
        this.heapifyUp()
    }
    dequeue(){
        if(this.data.length<=0)
            return 
        let top = this.data[0]
        this.data[0] = this.data[this.data.length-1]
        this.data.pop()
        if(this.data.length>0){
            this.heapifyDown()     
        }
        return top
    }
    heapifyUp(){
        let index = this.data.length-1
        while(index>0){
            let parentIndex = this.getParentIndex(index)
            if(this.compare(this.data[index], this.data[parentIndex])){
                let temp = this.data[index]
                this.data[index] = this.data[parentIndex]
                this.data[parentIndex] = temp

                index = parentIndex
            }else{
                break;
            }
        }

    }
    heapifyDown(){
        let index = 0
        while(true){
            let leftChildIndex = this.getLeftChildIndex(index)
            let rightChildIndex = this.getRightChildIndex(index)
            let smallest = index

            if(leftChildIndex < this.data.length && this.compare(this.data[leftChildIndex], this.data[smallest])){
                 smallest =  leftChildIndex  
            }

            if(rightChildIndex < this.data.length && this.compare(this.data[rightChildIndex], this.data[smallest])){
                smallest = rightChildIndex
            }
            if(smallest !== index){
                let temp = this.data[index]
                this.data[index] = this.data[smallest]
                this.data[smallest] = temp

                index = smallest
            }else{
                break;
            }

        }

    }
}
