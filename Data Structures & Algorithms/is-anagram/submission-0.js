class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        let SFreqArray = new Array(26).fill(0)
        for(let char of s){
            SFreqArray[char.charCodeAt(0)-'a'.charCodeAt(0)]++
        }
        for(let char of t){
            SFreqArray[char.charCodeAt(0)-'a'.charCodeAt(0)]--
        }
        for(let num of SFreqArray){
            if(num<0 || num>0){
                return false
            }
        }
        return true
    }
}
