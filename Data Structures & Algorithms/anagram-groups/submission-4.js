class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //hashcode -> array of anagrams
        let indexMap = new Map()
        for(let str of strs){
            let hashCode = this.getHashCode(str)
            if(!indexMap.has(hashCode)){
                indexMap.set(hashCode, [])
            }
            indexMap.get(hashCode).push(str)
        }
        return Array.from(indexMap.values())
        
    }

    getHashCode(str){
        let freqArray = new Array(26).fill(0)
        for(let char of str){
            freqArray[char.charCodeAt(0)-'a'.charCodeAt(0)]++
        }
        return freqArray.join('#')
    }
}
