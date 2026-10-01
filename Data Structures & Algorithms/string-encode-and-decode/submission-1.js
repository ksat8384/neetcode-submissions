class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = ""
        for(let str of strs){
            let length = str.length
            encodedString += length +"$"+str
        }
        console.log("encodedString =", encodedString)
        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
       let i=0
       let res=[]
       while(i<str.length){
         let j=i
         while(str[j]!=="$"){
            j++
         }
         let length = parseInt(str.slice(i, j))
         let start = j+1
         let end = start+length
         res.push(str.slice(start, end))
         i=end
       }
       return res
    }
}
