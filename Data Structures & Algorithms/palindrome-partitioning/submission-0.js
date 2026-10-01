class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let result = []

        const dfs = (startIndex, currentBatch)=>{
            if(startIndex>=s.length){
                result.push([...currentBatch])
                return
            }
            for(let endIndex=startIndex; endIndex<s.length; endIndex++){
                if(this.isPalindrome(s, startIndex, endIndex)){
                    //add to current batch
                    currentBatch.push(s.substring(startIndex, endIndex+1))
                    dfs(endIndex+1, currentBatch)
                    //backtrack
                    currentBatch.pop()
                }
            }
        }

        dfs(0, [])
        return result
    
        
    }

        isPalindrome(string, startIndex, endIndex){
            while(startIndex<=endIndex){
                if(string[startIndex] !== string[endIndex]){
                    return false
                }
                startIndex++
                endIndex--
            }
            return true
        }
}
