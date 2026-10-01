class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = []
        const backtrack = (open, close, currentBatch) => {
            if(currentBatch.length === 2*n){
                result.push(currentBatch.join(''))
                return
            }
            //we can open until it is less than n
            if(open<n){
                //push open
                currentBatch.push('(')
                //open will be increase by 1, close stays the same
                backtrack(open+1, close, currentBatch)
                //backtrack
                currentBatch.pop()
            }
            //we can close when open is greater than close
            if(open>close){
                 //push close
                 currentBatch.push(')')
                 //close will increase by 1, open stays the same
                 backtrack(open, close+1, currentBatch)
                 //backtrack
                 currentBatch.pop()
            }
        }
        backtrack(0, 0, [])
        return result
    }
}
