class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = []
        let used = new Array(nums.length).fill(false)

        const backtrack = (nums, currentPermutation) =>{
            if(nums.length === currentPermutation.length){
                result.push([...currentPermutation])
                return
            }
            for(let i=0; i<nums.length; i++){
                if(used[i])
                    continue
                //mark the index as used    
                used[i]=true
                currentPermutation.push(nums[i]) 

                //recurse
                backtrack(nums, currentPermutation)

                //backtrack
                used[i]=false
                currentPermutation.pop() 

            }
        }

        backtrack(nums, [])
        return result
       
    }



}
