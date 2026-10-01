class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        if(nums.length < k)
            return -1
        let maxHeap = new MaxPriorityQueue()
        for(let num of nums){
            maxHeap.push(num)
        }
        for(let i=1; i<k;i++){
            maxHeap.pop()
        }
        return maxHeap.pop()
    }
}
