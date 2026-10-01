class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        if(!nums || nums.length==0)
            return[]
        let result = []

        const dfs = (n, target, nums, currentCombination)=>{
            if(n==0 || target<0)
                return 
            if(target === 0){
                result.push([...currentCombination])
                return 
            }
            
            //use coin  
            if(nums[n-1]<=target){
                currentCombination.push(nums[n-1])
                dfs(n, target-nums[n-1], nums, currentCombination) 
                //backtrack
                currentCombination.pop() 
            } 
            //dont use coin 
            dfs(n-1, target, nums, currentCombination) 
        }

        dfs(nums.length, target, nums, [])
       
        return result
    }

   
}
