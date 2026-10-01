class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0

        const palindromicSubstrings = (string, leftIndex, rightIndex) =>{
            while(leftIndex>=0 && rightIndex<string.length && string[leftIndex]===string[rightIndex]){
                count++
                leftIndex--
                rightIndex++
            }
            return string.slice(leftIndex+1, rightIndex)
        }

        for(let i=0; i<s.length; i++){
            //for odd length palindrome
            palindromicSubstrings(s, i, i)

             //for even length palindrome
              palindromicSubstrings(s, i, i+1)
        }

        return count
    }

  
}
