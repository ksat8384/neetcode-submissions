class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0
        for(let index=0; index<s.length; index++){
            //odd
           count += this.getPalindromicSubstringCount(s, index, index)
            //even
            count += this.getPalindromicSubstringCount(s, index, index+1)
        }
        return count
    }

    getPalindromicSubstringCount(s, start, end){
        let count = 0
        while(start>=0 && end<s.length && s[start]===s[end]){
            start--
            end++
            count++
        }
        return count
    }
}
