class MedianFinder {
    constructor() {
        this.leftMaxHeap = new MaxPriorityQueue(); // Max Heap logic
        this.rightMinHeap = new MinPriorityQueue(); // Min Heap logic
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        //always push to left max heap
        this.leftMaxHeap.enqueue(num)
        //Move the largest element from left max heap to right min heap
        this.rightMinHeap.enqueue(this.leftMaxHeap.dequeue())
        //un-even size
        if(this.leftMaxHeap.size()<this.rightMinHeap.size()){
            this.leftMaxHeap.enqueue(this.rightMinHeap.dequeue())
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
       //we guarantee left max heap size is greater then right min heap
        if(this.leftMaxHeap.size() > this.rightMinHeap.size()){
            return this.leftMaxHeap.front()
        }
        return (this.leftMaxHeap.front()+this.rightMinHeap.front())/2
       
    }
}
