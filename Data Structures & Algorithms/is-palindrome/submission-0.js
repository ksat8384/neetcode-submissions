class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
       let alphaNumericString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
       let i=0
       let j=alphaNumericString.length-1
       while(i<j){
        if(alphaNumericString[i]!==alphaNumericString[j]){
            return false
        }
        i++
        j--
       }
       return true
    }
}
