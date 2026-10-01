class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(!nums)
          return 0
        if(nums.length==1)
            return nums[0]  
       let first = this.linearRob(nums, 0, nums.length-2)
       let second = this.linearRob(nums, 1, nums.length-1)
       return Math.max(first, second)
    }

    linearRob(nums, start, end){
        let prev2=0
        let prev1=0
        let maxAmount = 0
        for(let i=start; i<=end;i++){
            let currentAmount = Math.max(nums[i]+prev2, prev1)
            maxAmount = Math.max(maxAmount, currentAmount)
            prev2 = prev1
            prev1 = currentAmount
        }
        return maxAmount
    }
}
