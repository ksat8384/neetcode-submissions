class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if(nums.length==0)
            return -1
        let low=0
        let high=nums.length-1
        while(low<=high){
            let mid = low + Math.floor((high-low)/2)
            if(nums[mid]===target){
                return mid
            }else if(nums[mid]>target){
                high=mid-1
            }else{
                low=mid+1
            }
        }
        return -1
    }
}
