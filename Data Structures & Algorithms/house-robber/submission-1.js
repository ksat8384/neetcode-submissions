class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        
        let dp = new Array(nums.length).fill(0)
        let n = nums.length

        if(n==0)
          return 0
        if(n==1)
            return nums[0]  
        dp[0]=nums[0]
        dp[1]=Math.max(nums[0], nums[1])
        for(let i=2; i<n;i++){
            dp[i]= Math.max(nums[i]+dp[i-2], dp[i-1]) 
        }
        return Math.max(...dp)
    }
}
