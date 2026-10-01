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
            node=node[char]
         }
         node.isEndOfWord=true
       }
       let n = s.length
       let dp = new Array(s.length+1).fill(false)
       //dp[i] true if s[0..i-1] can be segmented
       dp[0]=true
       for(let i=0;i<n;i++){
          if(!dp[i]) 
            continue
          let node = root
          for(let j=i; j<n; j++){
            let char = s[j]
            if(!node[char])
                break
            node = node[char]
            if(node.isEndOfWord===true){
                dp[j+1]=true
            }     
          }  
       }
       return dp[s.length]
    }
   
}