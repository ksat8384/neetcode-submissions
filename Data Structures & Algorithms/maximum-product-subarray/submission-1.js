class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
         let currentMin = nums[0]
         let currentMax = nums[0]
         let res = nums[0]
        for(let i=1; i<nums.length; i++){
           let candidate1 = nums[i]
           let candidate2 = nums[i]*currentMin 
           let candidate3 = nums[i]*currentMax
           currentMax = Math.max(candidate1, candidate2, candidate3)
           currentMin = Math.min(candidate1, candidate2, candidate3)
         
           res = Math.max(res, currentMax)
        }
        return res
    }
}
