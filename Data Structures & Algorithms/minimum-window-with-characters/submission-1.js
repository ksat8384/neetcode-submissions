class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(s.length < t.length){
            return ""
        }
        let freqArrayS = new Array(256).fill(0)
        let freqArrayT = new Array(256).fill(0)
        for(let char of t){
            freqArrayT[char.charCodeAt(0)]++
        }
        let start = 0
        let minLength = Infinity
        let startIndex = -1
        let count = 0
        for(let end=0; end<s.length; end++){
            freqArrayS[s.charCodeAt(end)]++

            //count the characters
            if(freqArrayT[s.charCodeAt(end)]!==0 && freqArrayS[s.charCodeAt(end)]<=freqArrayT[s.charCodeAt(end)]){
                count++
            }

            if(count === t.length){
                //squeeze window
                while(freqArrayT[s.charCodeAt(start)]===0 || freqArrayS[s.charCodeAt(start)] > freqArrayT[s.charCodeAt(start)]){
                    freqArrayS[s.charCodeAt(start)]--
                    start++
                }
                let currentWindowLength = end-start+1
                if(currentWindowLength < minLength){
                    minLength = currentWindowLength
                    startIndex = start
                }
            }
        }
        if(startIndex === -1){
            return ""
        }
        return s.substring(startIndex, startIndex+minLength)
    }
}
