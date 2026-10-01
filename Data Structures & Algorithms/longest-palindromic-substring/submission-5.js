class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let res = ""
        for(let i=0; i<s.length;i++){
            let evenPalindromeString = this.getPalindromeString(s,i,i+1)
            let oddPalindromeString = this.getPalindromeString(s,i,i)
            if(res.length<evenPalindromeString.length){
                res = evenPalindromeString
            }
            if(res.length<oddPalindromeString.length){
                res = oddPalindromeString
            }
        }
        return res
    }

    getPalindromeString(s, start, end){
        while(start>=0 && end<s.length && s[start]===s[end]){
            start--
            end++
        }
        return s.substring(start+1, end)
    }
   
}
