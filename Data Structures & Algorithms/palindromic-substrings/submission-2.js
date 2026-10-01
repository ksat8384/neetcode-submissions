class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0
        for(let index=0; index<s.length; index++){
            //odd
            let i=index
            let j=index
            while(i>=0 && j<s.length && s[i]===s[j]){
                i--
                j++
                count++
            }

              //even
            i=index
            j=index+1
            while(i>=0 && j<s.length && s[i]===s[j]){
                i--
                j++
                count++
            }
        }
        return count
    }
}
