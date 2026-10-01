class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b)
        let n = nums.length
        let result = []
        for(let i=0;i<=n-3;i++){
            //skip duplicates for first number
            if(i>0 && nums[i]===nums[i-1]){
                continue
            }
            let first=nums[i]
            let j=i+1
            let k=n-1
            while(j<k){
                let sum = nums[j]+nums[k]+nums[i]
                if(sum === 0){
                    result.push([nums[i], nums[j],nums[k]])
                    while(j<k && nums[j]===nums[j+1]){
                        j++
                    }
                    while(j<k && nums[k]===nums[k-1]){
                        k--
                    }
                    j++
                    k--
                }else if(sum > 0){
                    k--
                }else{
                    j++
                }
            }
        }
        return result
    }
}
