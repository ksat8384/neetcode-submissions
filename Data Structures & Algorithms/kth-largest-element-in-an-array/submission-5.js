class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let minHeap = new MinHeap()
        for(let num of nums){
            minHeap.enqueue(num)

            if(minHeap.getSize()>k){
                minHeap.dequeue()
            }
        }
        return minHeap.peek()
        
    }
}
class MinHeap{
    constructor(){
        this.data = []
    }
    peek(){
        if(this.data.length<=0)
            return -1
        return this.data[0]
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
    enqueue(val){
        this.data.push(val)
        this.heapifyUp()
    }
    dequeue(){
        if(this.data.length <= 0)
            return
        let top = this.data[0]
        this.data[0] = this.data[this.data.length-1]
        this.data.pop()
        if(this.data.length>0)
            this.heapifyDown()
        return top
    }
    heapifyUp(){
        let index = this.data.length-1
        while(index>0){
            let parentIndex = this.getParentIndex(index)
            if(this.data[index] < this.data[parentIndex]){
                let temp = this.data[index]
                this.data[index] = this.data[parentIndex]
                this.data[parentIndex] = temp
                index = parentIndex
            }else{
                break
            }
        }

    }
    heapifyDown(){
        let index = 0
        while(true){
            let leftChildIndex = this.getLeftChildIndex(index)
            let rightChildIndex = this.getRightChildIndex(index)
            let smallest = index

            if(leftChildIndex<this.data.length 
            && this.data[leftChildIndex]<this.data[smallest]){
                smallest = leftChildIndex
            }

             if(rightChildIndex<this.data.length 
            && this.data[rightChildIndex]<this.data[smallest]){
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


