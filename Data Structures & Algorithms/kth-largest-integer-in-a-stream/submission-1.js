class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
      this.k = k
      this.minHeap = new MinPriorityQueue()
      for(let num of nums){
        this.minHeap.enqueue(num)
        if(this.minHeap.size()>k){
            this.minHeap.dequeue()
        }
      }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.enqueue(val)
        if(this.minHeap.size()>this.k){
            this.minHeap.dequeue()
        }
        return this.minHeap.front()
    }
}
