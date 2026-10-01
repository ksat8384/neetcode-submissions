class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let n = nums.length
        let res = []
        for(let i=0; i<=n-k; i++){
            let max=nums[i]
            for(let j=i; j<k+i; j++){
                if(nums[j]>max){
                    max=nums[j]
                }
            }
            res.push(max)
        }
        return res
    }
}
