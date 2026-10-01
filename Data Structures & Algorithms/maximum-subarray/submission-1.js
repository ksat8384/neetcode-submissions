class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = -Infinity
        let currentSum = 0
        for(let num of nums){
           currentSum = Math.max(num, currentSum+num)
           maxSum = Math.max(maxSum, currentSum)
        } 
        return maxSum
    }
}
