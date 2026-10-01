class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = []

        const dfs = (nums, currentSet) => {
            if(nums.length === currentSet.size){
                result.push([...currentSet])
                return
            }
            for(let i=0; i<nums.length; i++){
                if(!currentSet.has(nums[i])){
                    currentSet.add(nums[i])
                    dfs(nums, currentSet)
                    //backtrack
                    currentSet.delete(nums[i])
                }
            }
        }
        dfs(nums, new Set())
        return result
      
    }



}
