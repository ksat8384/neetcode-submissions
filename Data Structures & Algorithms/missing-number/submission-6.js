class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
       let n = nums.length
       let xorSum = 0
       for(let i=0; i<=n; i++){
         xorSum ^= i^nums[i]
       }
       return xorSum
    }
}
