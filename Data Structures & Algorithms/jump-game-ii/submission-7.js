class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
       let smallest = Infinity
       let memo = new Array(nums.length).fill(Infinity)
       const backtrack = (i, jump)=>{
         if(i===nums.length-1){
            smallest = Math.min(smallest, jump)
            return
         }
         if(jump<memo[i])
            return
         let maxJump = nums[i]
         let maxJumpIndex = i+maxJump
         for(let newIndex=maxJumpIndex; newIndex>i; newIndex--){
             let nextfarthestJump = jump+1
             if(nextfarthestJump<memo[newIndex]){
                memo[newIndex] = nextfarthestJump
                backtrack(newIndex, nextfarthestJump)
             }
            
         }
       }
       memo[0]=0
       backtrack(0, 0)
       return smallest
    }
    
}
