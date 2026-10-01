class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
       let low = 0
       let high = nums.length-1
       let minIndex = this.findMinimumIndex(nums)

       //already all nums sorted edge case
       if(minIndex===0){
         low = 0
         high = nums.length-1
       }else if(target>=nums[low] && target<=nums[minIndex-1]){
         //check left sorted half
         low = 0
         high = minIndex-1
       }else{
        //check right sorted half
        low = minIndex
        high = nums.length-1
       }

       //Normal binary search
       while(low<=high){
        let mid = low + Math.floor((high-low)/2)
        if(target === nums[mid]){
            return mid
        }else if (target > nums[mid]){
            low = mid+1
        }else{
            high = mid-1
        }
       }

       return -1
    }

    findMinimumIndex(nums){
         //find minimum in rotated sorted array
        let low = 0
        let high = nums.length-1
        while(low<high){
            let mid = low + Math.floor((high-low)/2)
            if(nums[mid]>nums[high]){
                low = mid+1
            }else{
                high=mid
            }
        }
        return low
    }


}
