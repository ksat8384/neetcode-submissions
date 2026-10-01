class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let goalIndex = nums.length-1
        for(let i=nums.length-1; i>=0; i--){
            if(i + nums[i] >= goalIndex){
                goalIndex = i
            }
        }
        return goalIndex===0
    }
}
