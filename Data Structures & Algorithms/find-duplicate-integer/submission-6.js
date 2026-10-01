class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let index=0
        for(let num of nums){
            index = Math.abs(num)
            if(nums[index]<0){
                return index
            }
            nums[index]= -nums[index]
        }
        return index
    }
}


