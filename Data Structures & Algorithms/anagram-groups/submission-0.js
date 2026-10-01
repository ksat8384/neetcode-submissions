class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = []
        //map with hashkey and index
        let freqMap = new Map()
        for(let i=0; i<strs.length; i++){
            let str = strs[i]
            let key = this.getHashKey(str)
            if(!freqMap.has(key)){
                result.push([])
                freqMap.set(key, result.length-1)
            }
            result[freqMap.get(key)].push(str)
        }
        return result
    }

    getHashKey(str){
       let freqArray = new Array(26).fill(0)
        for(let char of str){
            freqArray[char.charCodeAt(0)-'a'.charCodeAt(0)]++
        }
        return freqArray.join("$");
    }

}
