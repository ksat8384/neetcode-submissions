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
            let c1 = nums[i]*currentMin
            let c2 = nums[i]*currentMax
            let c3 = nums[i]
            currentMin = Math.min(c1, c2, c3)
            currentMax = Math.max(c1, c2, c3)
            maxProduct = Math.max(maxProduct, currentMax)
        }
        return maxProduct
    }
}
