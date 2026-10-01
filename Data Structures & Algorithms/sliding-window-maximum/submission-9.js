class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        //stores indices, all the values of these will be in decreasing order
        let dequeue = []
        let res = []
        for(let i=0; i<nums.length; i++){
            //remove out of window indices from queue
            if(dequeue.length>0 && dequeue[0]<=i-k){
                dequeue.shift()//removes from front
            }
            //remove values that are smaller then current num
            while(dequeue.length>0 && nums[dequeue[dequeue.length-1]]<=nums[i]){
                 dequeue.pop()//remove from back
            }
            dequeue.push(i)
           
           if(i >= k-1){
                res.push(nums[dequeue[0]])
           }

        }
        return res
    }
    
}
