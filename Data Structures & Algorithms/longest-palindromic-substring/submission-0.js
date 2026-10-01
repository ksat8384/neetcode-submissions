class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {

        const palindromicSubstring = (string, left, right) =>{
            while(left>=0 && right<string.length && string[left]===string[right]){
                left--
                right++
            }
            return string.slice(left+1, right)
        }
        let res = ""
        for(let i=0; i<s.length; i++){
            //for odd length
          let oddPalindromicSubstring  = palindromicSubstring(s, i, i)
            //for even length
          let evenPalindromicSubstring  = palindromicSubstring(s, i, i+1)
          if(res.length < oddPalindromicSubstring.length){
            res = oddPalindromicSubstring
          }
           if(res.length < evenPalindromicSubstring.length){
            res = evenPalindromicSubstring
          }  
        }
        return res
    }
}
