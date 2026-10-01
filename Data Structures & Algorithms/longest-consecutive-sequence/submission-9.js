class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let hashSet = new Set(nums)
        let maxCount = 0
        for(let num of nums){
            if(hashSet.has(num) && !hashSet.has(num-1)){
                let current = num
                let count = 0
                while(hashSet.has(current)){
                    hashSet.delete(current)
                    count++
                    current++
                }
                maxCount = Math.max(maxCount, count)
            }
        }
        return maxCount
    }
}
