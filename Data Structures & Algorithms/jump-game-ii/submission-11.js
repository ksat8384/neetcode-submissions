class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
       let n = nums.length
       let left = 0
       let right = 0
       let count = 0
       while(right<n-1){
          let farthestIndex = 0
          for(let i=left; i<=right; i++){
            farthestIndex=Math.max(farthestIndex, i+nums[i])
          }
          left=right+1
          right=farthestIndex
          count++
       }
       return count
    }
}