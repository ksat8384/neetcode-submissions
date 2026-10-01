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
        let freqArray = new Array(26).fill(0)
        for(let i=0; i<s.length; i++){
            freqArray[s[i].charCodeAt(0)-'a'.charCodeAt(0)]++
        }
        for(let i=0; i<t.length; i++){
            freqArray[t[i].charCodeAt(0)-'a'.charCodeAt(0)]--
        }
         for(let num of freqArray){
            if(num<0 || num>0)
                return false
         }
         return true

    }
}
