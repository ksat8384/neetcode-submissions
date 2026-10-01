class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let n = nums.length
        let smallest = Infinity
        let memo = new Array(n).fill(-1)
        const backtrack = (i, jump)=>{
            

            if(i===n-1){
                smallest = Math.min(smallest, jump)
                return
            }

             if( memo[i] !== -1)
                return memo[i]
           
            let maxJump = nums[i]
            let maxReachableIndex = Math.min(i+maxJump, n-1)
            for(let newIndex=maxReachableIndex; newIndex>i; newIndex--){
               memo[newIndex] = backtrack(newIndex, jump+1)
            }
        }
        backtrack(0, 0)
        return smallest
    }
    
}
