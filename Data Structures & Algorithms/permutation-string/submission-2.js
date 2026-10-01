class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length>s2.length)
            return false
        let s1FreqArray = new Array(26).fill(0)
        let s2FreqArray = new Array(26).fill(0)
        for(let char of s1){
            s1FreqArray[char.charCodeAt(0)-'a'.charCodeAt(0)]++
        }
        let i=0
        let j=0
        let count=0
        while(j<s2.length){
            s2FreqArray[s2[j].charCodeAt(0)-'a'.charCodeAt(0)]++
            count++
            //make window valid
            while(count>s1.length){
                s2FreqArray[s2[i].charCodeAt(0)-'a'.charCodeAt(0)]--
                i++
                count--
            }
            if(this.isMatch(s1FreqArray, s2FreqArray)){
                return true
            }
            j++            
        }
        return false

    }

    isMatch(arr1, arr2){
        for(let i=0; i<=26;i++){
            if(arr1[i]!==arr2[i]){
                return false
            }
        }
        return true
    }
}
