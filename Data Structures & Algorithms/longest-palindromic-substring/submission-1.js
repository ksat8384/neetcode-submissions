class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let n = s.length
        let res = ""
        for(let i=0; i<s.length; i++){
           let oddPalindromeString = this.getPalindromeString(s, i, i)
           let evenPalindromeString = this.getPalindromeString(s, i, i+1)
           if(oddPalindromeString.length > res.length){
              res = oddPalindromeString
           }
           if(evenPalindromeString.length>res.length)
              res = evenPalindromeString  
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
