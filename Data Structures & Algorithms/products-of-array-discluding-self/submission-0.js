class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftProductArray = new Array(nums.length).fill(1)
        for(let i=1; i<nums.length; i++){
            leftProductArray[i] = nums[i-1] *  leftProductArray[i-1]
        }
        let rightProductArray = new Array(nums.length).fill(1)
        for(let i=nums.length-2; i>=0; i--){
            rightProductArray[i] = nums[i+1] * rightProductArray[i+1]
        }
        let result = new Array(nums.length).fill(1)
        for(let i=0; i<nums.length; i++){
            result[i] = leftProductArray[i]*rightProductArray[i]
        }
        return result
    }
}
