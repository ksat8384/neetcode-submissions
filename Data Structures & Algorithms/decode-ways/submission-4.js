class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
       let n = s.length
       let prev1 = 1
       let prev2 = 0
       for(let i=n-1; i>=0; i--){
         let current = 0
         if(s[i]!=="0"){
            current = prev1
         }
         if(i+1<n
            && (s[i]=="1" && s[i+1]<="9")
            || (s[i]=="2" && s[i+1]<="6")
         ){
            current += prev2
         }
         prev2 = prev1
         prev1 = current
       }
       return prev1
    }
}
