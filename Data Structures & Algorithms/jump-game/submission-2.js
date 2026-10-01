class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let goalIndex = nums.length-1
        for(let i=nums.length-1; i>=0; i--){
             let currentIndex = i
             let maxJumpAtCurrentIndex = nums[i]
            if(currentIndex + maxJumpAtCurrentIndex >= goalIndex){
                goalIndex = currentIndex
            }
        }
        return goalIndex===0
    }
}
