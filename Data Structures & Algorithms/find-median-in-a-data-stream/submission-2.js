class MedianFinder {
    constructor() {
        this.leftMaxHeap = new MaxPriorityQueue()
        this.rightMinHeap = new MinPriorityQueue()
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.leftMaxHeap.enqueue(num)

        //balance it out. Move the largest into min heap
        this.rightMinHeap.enqueue(this.leftMaxHeap.dequeue())
      //leftMaxHeap should be 1 larger than rightMinHeap
        if(this.leftMaxHeap.size() < this.rightMinHeap.size()){
            this.leftMaxHeap.enqueue(this.rightMinHeap.dequeue())
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        let minHeapSize = this.rightMinHeap.size()
        let maxHeapSize = this.leftMaxHeap.size()

        if(minHeapSize === maxHeapSize){
            return (this.leftMaxHeap.front() + this.rightMinHeap.front())/2
        }else{
            return this.leftMaxHeap.front()
        }
    }
}
