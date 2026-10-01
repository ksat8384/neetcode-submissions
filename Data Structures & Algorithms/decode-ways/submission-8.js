class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
       let next1 = 1
       let next2 = 0
       let n = s.length
       for(let i=n-1; i>=0; i--){
        let current = 0
         if(s[i]!=="0"){
            current += next1
         }
         if(i+1<n 
         && s[i]=="1" && s[i+1]<="9"
         || s[i]=="2" && s[i+1]<="6"){
            current += next2
         }
         next2 = next1
         next1 = current
       }
       return next1
    }

   

}
