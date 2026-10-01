class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0
        let right = 0
        let freqArray = new Array(26).fill(0)
        let maxLength = 0
        let maxFrequency = 0
        while(right<s.length){
            freqArray[s[right].charCodeAt(0)-'A'.charCodeAt(0)]++
            maxFrequency = Math.max(maxFrequency, freqArray[s[right].charCodeAt(0)-'A'.charCodeAt(0)])
            while( (right-left+1) - maxFrequency > k ){
                freqArray[s[left].charCodeAt(0)-'A'.charCodeAt(0)]--
                left++
            }
            maxLength = Math.max(maxLength, right-left+1)
            right++
        }
        return maxLength
    }
}
