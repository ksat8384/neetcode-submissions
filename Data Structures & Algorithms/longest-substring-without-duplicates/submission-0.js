class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i=0
        let j=0
        let set = new Set()
        let maxLength = 0
        while(j<s.length){
            while(set.has(s[j])){
                set.delete(s[i])
                i++
            }
            set.add(s[j])
            maxLength = Math.max(maxLength, j-i+1)
            j++
        }
        return maxLength
    }
}
