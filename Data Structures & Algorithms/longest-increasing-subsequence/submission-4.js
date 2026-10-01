class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let n = nums.length
        if (n === 0) 
            return 0; 
        let dp = new Array(n).fill(1)
        for(let i=n-2; i>=0;i--){
            for(let j=i+1; j<n; j++){
                if(nums[i]<nums[j]){
                    dp[i]=Math.max(dp[i], 1+dp[j])
                }
            }
        }
        return Math.max(...dp)
    }
}

