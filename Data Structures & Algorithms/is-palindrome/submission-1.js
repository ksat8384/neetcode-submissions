class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
      let i=0
      let j=s.length-1
      const isAlphaNumeric = (char)=>/[a-zA-Z0-9]/.test(char)

      while(i<j){
        while(i<j && !isAlphaNumeric(s[i])){
            i++
        }
        while(i<j && !isAlphaNumeric(s[j])){
            j--
        }
        if(s[i].toLowerCase() !== s[j].toLowerCase()){
            return false
        }
        i++
        j--
      }
      return true
    }
}
