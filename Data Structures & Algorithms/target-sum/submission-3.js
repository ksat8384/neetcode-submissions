class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        if(nums.length === 0)
            return 0

        let dp = new Map()  
        const targetSumRecur = (i, total) => {
            if(i === nums.length){
                if(total === target){
                    return 1
                }else{
                    return 0
                }
            }
            let key = `${i},${total}`
            if(dp.has(key))
                return dp.get(key)
            let addWays =  targetSumRecur(i+1, total+nums[i])   
            let subWays = targetSumRecur(i+1, total-nums[i])
            dp.set(key, addWays + subWays)

            return dp.get(key)
        }
        return targetSumRecur(0, 0)   
    }
}
