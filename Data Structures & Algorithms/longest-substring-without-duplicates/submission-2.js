class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i=0
        let j=0
        let freqMap = new Map()
        let maxCount = 0
        while(j<s.length){
            //squeeze and increase i until duplicate is removed
            while(freqMap.has(s[j])){
                freqMap.delete(s[i])
                i++
            }
            freqMap.set(s[j], 1)
            let count = j-i+1
            maxCount = Math.max(count, maxCount)
            j++
        }
        return maxCount
    }
}
