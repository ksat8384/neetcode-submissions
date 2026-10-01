class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0
        let high = nums.length-1
        while(low<=high){
            let mid = low + Math.floor((high-low)/2)
            if(target == nums[mid]){
                return mid
            }
            if(nums[low]<=nums[mid]){
                //left half is sorted
                if(target>=nums[low] && target<nums[mid]){
                    high=mid-1
                }else{
                    low=mid+1
                }
            }else{
                if(target>nums[mid] && target<=nums[high]){
                     low = mid+1
                }else{
                     high = mid-1
                }
            }
        }
        return -1
    }
}
