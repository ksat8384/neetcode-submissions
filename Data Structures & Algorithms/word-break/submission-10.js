class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
       let memo = new Array(s.length+1).fill(-1)
       return this.wordBreakRecur(s, wordDict, 0, memo)
    }

    wordBreakRecur(s, wordDict, index, memo){
        if(s.length===index)
            return true

        if(memo[index]!==-1){
            return memo[index]
        }    
        let prefix = ""
        for(let j=index; j<s.length; j++){
            prefix +=s[j]
            if(wordDict.find(pre => pre === prefix)!==undefined 
            && this.wordBreakRecur(s, wordDict,j+1, memo)===true
            ){
                return memo[index] = true
            }
        }  
        return memo[index]=false  
    }
}
