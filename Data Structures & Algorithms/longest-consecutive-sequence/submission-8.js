class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length===0)
            return 0
       nums.sort((a,b) => a-b)
       let n = nums.length
       let count = 1
       let maxCount = 1
       for(let i=1; i<n; i++){
         if(nums[i]===nums[i-1])
            continue
         if(nums[i]===nums[i-1]+1){
            count++
         }else{
            count = 1
         }
         maxCount = Math.max(count, maxCount)
       } 
       return maxCount
      
    }
}
