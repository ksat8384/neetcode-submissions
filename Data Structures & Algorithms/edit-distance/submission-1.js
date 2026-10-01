class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        let m = word1.length
        let n = word2.length
        let dp = Array.from({length:m+1},()=>new Array(n+1).fill(-1))
       return this.editDistance(m, n, word1, word2, dp)
    }

    editDistance(m, n, s1, s2, dp){
        if(m==0)
            return n
        if(n==0)
            return m
        if(dp[m][n]!== -1) 
            return dp[m][n]   
        if(s1[m-1]===s2[n-1]){
            dp[m][n] = this.editDistance(m-1,n-1,s1,s2, dp)
        }else{
            dp[m][n] = 1+ Math.min(
                this.editDistance(m-1,n-1,s1,s2, dp),
                this.editDistance(m,n-1,s1,s2, dp),
                this.editDistance(m-1,n,s1,s2, dp)
            )
        }
        return dp[m][n]
    }
}

//base case
// w1,  w2 
// "", "abc" = min number of operations = length of word 2
// "abc", "" = min number of operations = length of word 1

// "abc", "acd" = i+1, j+1 => both matches
// replace
// "abc", "bbc" = 1 + (i+1,j+1)
// delete
// "abc", "bc" = 1+ (i+1,j)
// insert
// "bc", "abc" = 1+ (i, j+1)

// if(word1[i]===word2[j])
//     return 0 + minNumberOfOperations(i+1, j+1)
// else{
//     //insert
//     //replace
//     //delete
//     return 1 + Math.min(
//         minNumberOfOperations(i+1, j+1),
//         minNumberOfOperations(i+1, j),
//         minNumberOfOperations(i, j+1)
//     )
// }    
