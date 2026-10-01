class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0

        for(let i=0; i<s.length; i++){
            //For odd length palindrome
            let left = i
            let right= i
            while(left>=0 && right<s.length && s[left]===s[right]){
                count++
                left--
                right++
            }

             //For even length palindrome
             left=i
             right=i+1
              while(left>=0 && right<s.length && s[left]===s[right]){
                count++
                left--
                right++
            }   

        }
        return count
    }

  
}
