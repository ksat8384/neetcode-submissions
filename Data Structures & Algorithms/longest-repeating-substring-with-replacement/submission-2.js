class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
       let freqArray = new Array(26).fill(0)
       let i=0
       let j=0
       let maxWindow=0
       while(j<s.length){
        freqArray[s[j].charCodeAt(0)-'A'.charCodeAt(0)]++
        //make window valid
         while(((j-i+1)-Math.max(...freqArray)) > k){
            freqArray[s[i].charCodeAt(0)-'A'.charCodeAt(0)]--
            i++
         }
         
         //window valid
         maxWindow = Math.max(maxWindow, j-i+1)
         j++
       }
       return maxWindow
    }
}
