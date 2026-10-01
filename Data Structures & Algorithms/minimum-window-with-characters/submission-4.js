class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(s.length < t.length)
            return ""
        let tFreqArray = new Array(256).fill(0)
        for(let char of t){
            tFreqArray[char.charCodeAt(0)]++
        }
        let sFreqArray = new Array(256).fill(0)
        let start=0
        let end=0
        let minWindowLength = Infinity
        let count = 0
        let startIndex=-1
        while(end<s.length){
            sFreqArray[s[end].charCodeAt(0)]++
            //count the presence of t characters in s
            if(tFreqArray[s[end].charCodeAt(0)] !== 0
            &&
            sFreqArray[s[end].charCodeAt(0)] <= tFreqArray[s[end].charCodeAt(0)]
            ){
               count++ 
            }
            if(count === t.length){
                //squeeze window
                while(
                   tFreqArray[s[start].charCodeAt(0)] === 0
                   ||
                   sFreqArray[s[start].charCodeAt(0)] > tFreqArray[s[start].charCodeAt(0)]
                ){
                    sFreqArray[s[start].charCodeAt(0)]--
                    start++
                }
                let windowLength = end-start+1
                if(windowLength<minWindowLength){
                    startIndex=start
                    minWindowLength = windowLength
                }
            }
            end++
        }
        if(startIndex === -1){
            return ""
        }
        return s.substring(startIndex, startIndex+minWindowLength)
    }
}
