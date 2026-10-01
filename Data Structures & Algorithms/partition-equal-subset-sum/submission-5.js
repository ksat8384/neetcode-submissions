class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let n = nums.length
        let sum = nums.reduce((acc, curr)=> acc+curr, 0)
        if(sum % 2 !== 0)
            return false

        sum = sum/2    

        let prev = new Array(sum+1).fill(false)
        let curr = new Array(sum+1).fill(false)  
        prev[0]=true
        for(let i=1; i<=n; i++){
            for(let j=0;j<=sum;j++){
                if(nums[i-1]>j){
                    curr[j]=prev[j]
                }else{
                    curr[j]=prev[j]||prev[j-nums[i-1]]
                }
            }
            prev=[...curr]
        }
        return prev[sum]  
    }
}
