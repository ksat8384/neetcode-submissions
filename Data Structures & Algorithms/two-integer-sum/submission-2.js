class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let itemToIndexMap = new Map()

        for(let i=0; i<nums.length; i++){
            let pair = target - nums[i]
            if(itemToIndexMap.has(pair)){
                return [i, itemToIndexMap.get(pair)]
            }
            itemToIndexMap.set(nums[i], i)
        }
        return [-1, -1]

    }
}
