class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let maxHeap = new MaxHeap()
        let res = []
        for(let i=0;i<k; i++){
            maxHeap.enqueue({value:nums[i], index: i})
        }
        res.push(maxHeap.front().value)
        for(let i=k; i<nums.length; i++){
            maxHeap.enqueue({value:nums[i], index: i})

            while(maxHeap.front().index <= i-k){
                maxHeap.dequeue()
            }
            res.push(maxHeap.front().value)
        }
        return res
    }
}

class MaxHeap{
    constructor(){
        this.heap = []
    }

    front(){
        return this.heap[0]
    }

    compare(a,b){
        if(a.value !== b.value){
           return a.value > b.value
        }
        return a.index>b.index
    }

    enqueue(node){
        this.heap.push(node) 
        this.heapifyUp()   
    }

    dequeue(){
        if(this.heap.length===0)
            return -1
        let top = this.heap[0]
        this.heap[0] = this.heap[this.heap.length-1]
        this.heap.pop()
        if(this.heap.length>0)
            this.heapifyDown()

        return top
    }

    heapifyUp(){
       let index = this.heap.length-1
       while(index>0){
        let parentIndex = Math.floor((index - 1)/2)
        if(this.compare(this.heap[index], this.heap[parentIndex])){
            let temp = this.heap[index]
            this.heap[index] = this.heap[parentIndex]
            this.heap[parentIndex] = temp

            index = parentIndex
        }else{
            break;
        }
       }
    }

    heapifyDown(){
        let index = 0

        while(true){
             let largest = index
            let leftChildIndex = 2*index+1
            let rightChildIndex = 2*index+2
            if(leftChildIndex < this.heap.length && this.compare(this.heap[leftChildIndex], this.heap[largest])){
                largest = leftChildIndex
            }
            if(rightChildIndex < this.heap.length && 
            this.compare(this.heap[rightChildIndex], this.heap[largest])){
                largest = rightChildIndex
            }
            if(largest === index){
                break
            }else{
                let temp = this.heap[index]
                this.heap[index] = this.heap[largest]
                this.heap[largest] = temp

                index = largest
            }

        }

    }

}
