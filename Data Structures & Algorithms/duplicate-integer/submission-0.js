class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let freqMap = new Map()
        for(let num of nums){
            if(freqMap.has(num)){
                return true
            }else{
                freqMap.set(num, 1)
            }
        }
        return false
    }
}
