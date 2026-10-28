class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
       let n = nums.length
       let expectedSum = Math.floor(n*(n+1)/2)
       let actualSum = nums.reduce((acc, num)=>acc+num, 0)
       return expectedSum - actualSum
    }
}
