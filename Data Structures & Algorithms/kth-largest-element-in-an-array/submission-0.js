class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let minPriorityqueue = new MinPriorityQueue()
        for(let num of nums){
            minPriorityqueue.enqueue(num)
        }
        let n = nums.length
        let result
        for(let i=0; i<=n-k; i++){
           result = minPriorityqueue.dequeue()
        }
        return result
    }
}



