class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let n = nums.length
        let sum = nums.reduce((acc,curr)=>acc+curr, 0)
        if(sum %2 !== 0)
            return false
        sum=sum/2
        let dp = Array.from({length: n+1}, ()=>new Array(sum+1).fill(false))
        //if sum is zero, return true
        for(let i=0; i<=n;i++){
            dp[i][0]=true
        }
        //nums
        for(let i=1; i<=n;i++){
            //sum
            for(let j=1; j<=sum; j++){
                if(j<nums[i-1]){
                    //exclude
                    dp[i][j] = dp[i-1][j]
                }else{
                    dp[i][j] =
                    dp[i-1][j]||
                    dp[i-1][j-nums[i-1]]
                }

            }
         }
         return dp[n][sum]
    }
}
