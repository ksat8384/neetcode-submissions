class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let indexMap = new Map()
        for(let i=0; i<nums.length; i++){
            let expectedNum = target - nums[i]
            if(indexMap.has(expectedNum)){
                return [i, indexMap.get(expectedNum)]
            }else{
                indexMap.set(nums[i],i)
            }
        }
        return [-1, -1]
    }
}
