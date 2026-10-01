class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
         let currentMin = nums[0]
         let currentMax = nums[0]
         let maxProduct = nums[0]
        for(let i=1; i<nums.length; i++){
           let temp = Math.max(nums[i]*currentMin, nums[i]*currentMax, nums[i])
           currentMin = Math.min(nums[i]*currentMin, nums[i]*currentMax, nums[i]) 
           currentMax = temp
           maxProduct = Math.max(maxProduct, currentMax)
        }
        return maxProduct
    }
}
