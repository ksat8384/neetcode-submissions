class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let n = nums.length
        for(let i=0; i<n-1; i++){
            for(let j=i+1; j<n; j++){
                if(nums[i]===nums[j]){
                    return nums[i]
                }
            }
        }
        return -1
    }
}
