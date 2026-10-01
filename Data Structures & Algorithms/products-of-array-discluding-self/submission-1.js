class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let resultArray = new Array(nums.length).fill(1)
        let left=1
        let right=1
        let n = nums.length
        for(let i=0; i<n; i++){
            resultArray[i] *= left
            left = left * nums[i] 
            resultArray[n-1-i] *= right
            right = right * nums[n-1-i]
        }
        return resultArray
    }
}
