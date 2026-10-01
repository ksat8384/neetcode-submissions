class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let prev2=0
        let prev1=0
        let maxAmount = 0
        for(let i=0; i<nums.length; i++){
            let currentAmount = Math.max(prev2+nums[i], prev1)
            prev2=prev1
            prev1=currentAmount
            maxAmount = Math.max(maxAmount, currentAmount)
        }
        return maxAmount
       
    }
}
