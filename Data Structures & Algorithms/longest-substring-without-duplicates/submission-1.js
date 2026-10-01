class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0
        let right = 0
        let maxLength = 0
        let freqMap = new Map()
        while(right<s.length){
            while(freqMap.has(s[right])){
                freqMap.delete(s[left])
                left++
            }
            freqMap.set(s[right], 1)
            maxLength = Math.max(maxLength, right-left+1)
            right++
        }
        return maxLength
    }
}
