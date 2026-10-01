class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        return this.linearRob(nums)
    }

    linearRob(nums){
        if(nums.length==0)
            return 0
        if(nums.length==1)
            return nums[0]
        if(nums.length==2)
            return Math.max(nums[0], nums[1])     

        let n = nums.length       
        let prev2 = nums[0]
        let prev1 = Math.max(nums[0], nums[1])
        for(let i=2; i<=n-1;i++){
            let currentMax = Math.max(nums[i]+prev2, prev1)
            prev2 = prev1
            prev1 = currentMax
        }
        return prev1
    }
}
