class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        nums.sort((a,b)=>a-b)
        let n = nums.length
        let num = 0
        for(let i=0; i<n; i++){
            if(num !== nums[i]){
                return num
            }else{
                num++
            }
        }
        return num
    }
}
