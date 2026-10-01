class MedianFinder {
    constructor() {
        this.maxHeap = new MaxPriorityQueue()
        this.minHeap = new MinPriorityQueue()
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.maxHeap.enqueue(num)

        //balance it out. Move the largest into min heap
        this.minHeap.enqueue(this.maxHeap.dequeue())
      //minHeap size should be 1 less than max heap
        if(this.minHeap.size()>this.maxHeap.size()){
            this.maxHeap.enqueue(this.minHeap.dequeue())
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        let minHeapSize = this.minHeap.size()
        let maxHeapSize = this.maxHeap.size()

        if(minHeapSize === maxHeapSize){
            return (this.maxHeap.front() + this.minHeap.front())/2
        }else{
            return this.maxHeap.front()
        }
    }
}
