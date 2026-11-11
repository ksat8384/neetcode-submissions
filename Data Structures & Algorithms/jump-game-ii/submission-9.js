class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        
        let minJump = Infinity
        let n = nums.length
        let memo = new Array(n).fill(-1)
        const backtrack = (i, jump)=>{
            if(i >= n-1){
               minJump = Math.min(minJump, jump) 
               return    
            }
            if(memo[i]!==-1)
                return memo[i]
            let maxJump = nums[i]
            let maxFarthestIndex = Math.min(i+maxJump, n-1)
            for(let newIndex=maxFarthestIndex; newIndex>i; newIndex--){
                memo[newIndex]= backtrack(newIndex, jump+1)
            }
        }
        backtrack(0,0)
        return minJump
    }
}

