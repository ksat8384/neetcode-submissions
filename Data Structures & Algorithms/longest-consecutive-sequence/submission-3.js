class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      let hashSet = new Set(nums)
      let res = 0
      for(let num of nums){
        if(hashSet.has(num) && !hashSet.has(num-1)){
            let count = 0
            let current=num
            while(hashSet.has(current)){
                hashSet.delete(current)
                count++
                current++
            }
            res = Math.max(res, count)
        }
      }
        return res
    }
   
}
