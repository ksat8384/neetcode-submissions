class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const sum = nums.reduce((accumulator,currentValue,)=>accumulator+currentValue,0)

        if(sum % 2 !== 0)
            return false

        let memo = Array.from({length: nums.length}, ()=>new Array(sum+1).fill(-1))    

        return this.isSubsetSum(nums.length, nums, sum/2, memo)    
    }

    isSubsetSum(n, arr, sum, memo){
        if(sum==0)
            return true
        if(n==0)
            return false
        if(memo[n-1][sum]!==-1)
            return memo[n-1][sum]   
        if(arr[n-1]>sum){
            //skip it   
            return this.isSubsetSum(n-1, arr, sum, memo)
        } 
        //either exclude or include
        memo[n-1][sum] = this.isSubsetSum(n-1, arr, sum, memo) || this.isSubsetSum(n-1, arr, sum-arr[n-1], memo)

        return memo[n-1][sum]
              
    }
}
