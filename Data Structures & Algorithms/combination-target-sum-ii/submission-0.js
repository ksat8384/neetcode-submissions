class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
         let result = []
          candidates.sort((a, b) => a - b);

        const dfs = (n, target, candidates, currentSet)=>{
               
                if(target===0){
                    result.push([...currentSet])
                    return
                }

                 if(n==0||target<0)
                    return 
                //use
                currentSet.push(candidates[n-1])
                dfs(n-1, target-candidates[n-1], candidates, currentSet)
                currentSet.pop()
                //don't use
                //skip all duplicate elements to my left
                let nextIndex = n-1
                while(nextIndex>0 && candidates[nextIndex-1]===candidates[n-1]){
                    nextIndex--
                }
                dfs(nextIndex, target, candidates, currentSet)
            }

         dfs(candidates.length, target, candidates, [])
         return result
    }

  
}
