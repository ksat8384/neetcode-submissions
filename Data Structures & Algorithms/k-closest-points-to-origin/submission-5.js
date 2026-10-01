class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let maxHeap = new MaxHeap()
        for(let point of points){
            maxHeap.enqueue(point)
            if(maxHeap.size()>k){
                maxHeap.dequeue()
            }
        }
        return maxHeap.getElements()
    }


}

class MaxHeap{
    constructor(){
        this.heap = []
    }
    getElements(){
        return this.heap
    }
    size(){
        return this.heap.length
    }
    getDistance(point){
        return (point[0]*point[0]+point[1]*point[1])
    }
    enqueue(point){
        this.heap.push(point)
        this.heapifyUp()
    }
    heapifyUp(){
        let index = this.heap.length-1
        while(index>0){
             let parentIndex = Math.floor((index-1)/2)
             if(
                this.getDistance(this.heap[index]) >
             this.getDistance(this.heap[parentIndex])){
                let temp = this.heap[index]
                this.heap[index]=this.heap[parentIndex]
                this.heap[parentIndex]=temp

                index = parentIndex
             }else{
                break
             }
        }
    }
    dequeue(){
        if(this.heap.length<=0)
            return [-Infinity,-Infinity]
        if(this.heap.length===1)
            return this.heap[0]    
        let top = this.heap[0]
        this.heap[0]=this.heap[this.heap.length-1]
        this.heap.pop()
        if(this.heap.length>0)
            this.heapifyDown()
        return top
    }

    heapifyDown(){
        let index = 0
        while(true){
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 2
            let largest = index
            if(leftChildIndex < this.heap.length
            && this.getDistance(this.heap[leftChildIndex])>this.getDistance(this.heap[largest])
            ){
                largest = leftChildIndex
            }

                if(rightChildIndex < this.heap.length
            && this.getDistance(this.heap[rightChildIndex])>this.getDistance(this.heap[largest])
            ){
                largest = rightChildIndex
            }

            if(largest === index){
                break
            }else{
                let temp = this.heap[largest]
                this.heap[largest] = this.heap[index]
                this.heap[index]=temp

                index = largest
            }
        }
    }
}