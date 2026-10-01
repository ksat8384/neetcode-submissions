class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
     
      let root = {}  
      for(let word of wordDict){
         let node = root
         for(let char of word){
            if(!node[char]){
                node[char]={}
            }
            node = node[char]
         }
         node.isEndOfWord = true
      }

     let n = s.length 
     let dp = new Array(n+1).fill(false)
     dp[0]=true

     for(let i=0; i<n; i++){
        if(!dp[i])
            continue
        let node = root
        for(let j=i; j<n; j++){
            let char = s[j]
            if(!node[char]){
                break
            }
            node = node[char]
            if(node.isEndOfWord){
                dp[j+1]=true
            }
        }

     }
     return dp[n]

    }
}
