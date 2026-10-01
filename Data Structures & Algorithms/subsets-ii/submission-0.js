class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let result = []
        nums.sort((a,b)=>a-b)
        let used = new Array(nums.length).fill(false)

        const dfs = (index, nums, currentBatch) => {
            if(index >= nums.length){
                result.push([...currentBatch])
                return
            }
            //include
            used[index]=true
            currentBatch.push(nums[index])
            //recurse to next item
            dfs(index+1, nums, currentBatch) 

            //don't include
             used[index]=false
             let nextIndex = index+1
             while(nextIndex<nums.length && nums[nextIndex]===nums[index]){
                nextIndex++
             }
             currentBatch.pop()
            //recurse to next item
            dfs(nextIndex, nums, currentBatch) 
        }

        dfs(0, nums, [])
        return result

    }
}
