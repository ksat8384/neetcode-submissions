class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        let n = nums.length
        let dp = Array.from({length:n+1}, ()=>new Array(n+1).fill(-1))
        let newAppendedNums = new Array(n + 2).fill(0);
        newAppendedNums[0] = 1;
        newAppendedNums[n + 1] = 1;
        for (let i = 1; i <= n; i++) {
            newAppendedNums[i] = nums[i - 1];
        }
        return this.dfs(1, n, newAppendedNums, dp)        
    }

    dfs(i,j, nums, dp){
        if(i>j)
            return 0
        if(dp[i][j] !== -1)  
            return dp[i][j]  
        let max = -Infinity 
        for(let index=i; index<=j; index++){
           let coins = nums[i-1]*nums[index]*nums[j+1] + this.dfs(i,index-1, nums, dp) + this.dfs(index+1,j,nums, dp)
            max = Math.max(max, coins)
        }
        dp[i][j] = max
        return dp[i][j]    
    }
}


       



