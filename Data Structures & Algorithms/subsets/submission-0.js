class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
    let result = []    

    const dfs = (index, nums, currentBatch)=>{
        if(index>=nums.length)
        {
            result.push([...currentBatch])
            return
        }
        //include
        currentBatch.push(nums[index])
        dfs(index+1, nums, currentBatch)
        //exclude
        currentBatch.pop()
        dfs(index+1, nums, currentBatch)
    }

    dfs(0, nums, [])
    return result
       
    }
  
  
}
