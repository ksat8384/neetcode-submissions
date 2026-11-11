class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let n = nums.length
        let goal = n-1
        for(let i=n-2; i>=0; i--){
            if(nums[i]+i >= goal){
                goal = i
            }
        }
        return goal===0
        
    }
}

