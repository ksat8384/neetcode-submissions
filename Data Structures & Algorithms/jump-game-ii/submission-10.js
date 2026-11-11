class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
       const n = nums.length
       let memo = new Array(n).fill(-1)
       const backtrack = (i) => {
            if(i>=n-1)
                return 0
            if(memo[i]!==-1)
                return memo[i]
            let localMin = Infinity
            let maxFarthestIndex = Math.min(i+nums[i], n-1) 
            for(let newIndex = maxFarthestIndex; newIndex>i; newIndex--){
                localMin = Math.min(localMin, 1+backtrack(newIndex))
            }
            memo[i]=localMin
            return localMin  
       }
       return backtrack(0)
    }
}

