class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //map with hashkey and array
        let freqMap = new Map()
        for(let i=0; i<strs.length; i++){
            let str = strs[i]
            let key = this.getHashKey(str)
            if(!freqMap.has(key)){
                freqMap.set(key, [])
            }
            freqMap.get(key).push(str)
        }
        return Array.from(freqMap.values())
    }

    getHashKey(str){
       let freqArray = new Array(26).fill(0)
        for(let char of str){
            freqArray[char.charCodeAt(0)-'a'.charCodeAt(0)]++
        }
        return freqArray.join("$");
    }

}
