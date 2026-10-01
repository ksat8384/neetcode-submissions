class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0]
        let currentSum = nums[0]
        for(let i=1; i<nums.length; i++){
             if(nums[i]>currentSum+nums[i]){
                currentSum = nums[i]
             }else{
                currentSum += nums[i]
             }
             if(currentSum > maxSum){
                maxSum=currentSum
             }

        }
        return maxSum
    }
}
