class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
       let n = s.length
       
       let startIndex = -1
       let length = 0
       for(let index=0; index<s.length; index++){
            //odd length
            let i=index
            let j=index
            while(i>=0 && j<n){
                if(s[i]===s[j]){
                    if(length<j-i+1){
                        length = j-i+1
                        startIndex=i
                    }
                    i--
                    j++
                }else{
                    break
                }
            }

            //even length
            i=index
            j=index+1
            while(i>=0 && j<n){
                if(s[i]===s[j]){
                    if(length<j-i+1){
                        length = j-i+1
                        startIndex=i
                    }
                    i--
                    j++
                }else{
                    break
                }
            }
       }
       return s.slice(startIndex, startIndex+length)
    }
   
}
