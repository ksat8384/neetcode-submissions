class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0
        let high = nums.length-1
        while(low<high){
            let mid = low + Math.floor((high-low)/2)
            if(nums[mid]>nums[high]){
                low=mid+1
            }else{
                high=mid
            }
        }
        let mid = low
        low = 0
        high = nums.length-1
       let targetIndex = this.binarySearch(nums, 0, mid-1, target)
       if(targetIndex !==-1)
            return targetIndex

       return this.binarySearch(nums, mid, high,target)

    }
    binarySearch(nums, low, high, target){
        while(low<=high){
            let mid = Math.floor((low+high)/2)
            if(nums[mid]===target){
                return mid
            }else if(nums[mid]>target){
                high=mid-1
            }else{
                low = mid+1
            }
        }
        return -1
    }
}
