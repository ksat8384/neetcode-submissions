class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length==0)
            return 0
        if(nums.length==1)
           return nums[0]
        if(nums.length==2)
            return Math.max(nums[0], nums[1])        
        let skipFirstHouse = this.linearRob(nums, 1, nums.length-1)
        let skipLastHouse = this.linearRob(nums, 0, nums.length-2)
        return Math.max(skipFirstHouse, skipLastHouse)

    }
    linearRob(nums, start, end){
        let prev2 = 0
        let prev1 = 0
        for(let i=start; i<=end; i++){
            let currentMax = Math.max(nums[i]+prev2, prev1)
            prev2 = prev1
            prev1 = currentMax
        }
        return prev1
    }
}
