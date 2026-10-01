class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let res = []
        for(let i=0;i<=nums.length-k;i++){
            let max=-Infinity
            for(let j=i; j<k+i; j++){
                if(max<nums[j]){
                    max=nums[j]
                }
            }
             res.push(max)
        }
        return res

    }
}
