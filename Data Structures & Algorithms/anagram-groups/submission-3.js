class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = []
        //hashcode to index map in res
        let indexMap = new Map()
        for(let str of strs){
            let hashCode = this.getHashCode(str)
            if(!indexMap.has(hashCode)){
                res.push([str])
                indexMap.set(hashCode, res.length-1)
            }else{
                res[indexMap.get(hashCode)].push(str)
            }
        }
        return res
        
    }

    getHashCode(str){
        let freqArray = new Array(26).fill(0)
        for(let char of str){
            freqArray[char.charCodeAt(0)-'a'.charCodeAt(0)]++
        }
        return freqArray.join('#')
    }
}
