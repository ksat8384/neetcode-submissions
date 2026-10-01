class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let n = nums.length
        let smallest = Infinity
        let memo = new Array(n).fill(Infinity)
        const backtrack = (i, jump)=>{
            if(i===n-1){
                smallest = Math.min(smallest, jump)
                return
            }

             if( jump > memo[i])
                return
           
            let maxJump = nums[i]
            let maxReachableIndex = Math.min(i+maxJump, n-1)
            for(let newIndex=maxReachableIndex; newIndex>i; newIndex--){
             let nextJumpCount = jump+1 
             if(nextJumpCount< memo[newIndex]) {
                memo[newIndex]=nextJumpCount      
                backtrack(newIndex, nextJumpCount)
             }
            }
        }
        memo[0]=0
        backtrack(0, 0)
        return smallest
    }
    
}
