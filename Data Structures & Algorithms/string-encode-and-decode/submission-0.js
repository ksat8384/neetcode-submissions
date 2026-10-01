class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        for(let str of strs){
            let count = str.length
            result += count + "$"+ str 
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = []
        let i = 0
        while(i<str.length){
           let j=i
           while(str[j]!=="$"){
            j++
           }
           let length = parseInt(str.slice(i,j))
           let start = j+1
           let end = start+length
            result.push(str.slice(start, end))
            i=end
        }
        return result
    }
}
