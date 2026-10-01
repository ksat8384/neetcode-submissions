class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let n = nums.length
        let max = -Infinity
        let res = []
        for(let i=0; i<=n-k; i++){
            let max = nums[i]
            for(let j=1; j<k; j++){
                if(nums[i+j]>max){
                    max=nums[i+j]
                }
            }
            res.push(max)
        }
        return res
    }
}
