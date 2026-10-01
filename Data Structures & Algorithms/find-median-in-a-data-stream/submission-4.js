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
        //always push to left max heap
        this.leftMaxHeap.enqueue(num)
        //move the largest from left max to right min heap
      this.rightMinHeap.enqueue(this.leftMaxHeap.dequeue())
        //balance it out
        if(this.rightMinHeap.size()>this.leftMaxHeap.size()){
            this.leftMaxHeap.enqueue(this.rightMinHeap.dequeue())
        }

    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.leftMaxHeap.size()>this.rightMinHeap.size()){
            return this.leftMaxHeap.front()
        }
        return (this.leftMaxHeap.front() + this.rightMinHeap.front())/2
    }
}
