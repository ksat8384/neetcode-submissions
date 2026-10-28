class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
       let hashset = new Set(nums)
       let n = nums.length
       for(let i=0; i<=n; i++){
          if(!hashset.has(i))
            return i
       }
    }
}
