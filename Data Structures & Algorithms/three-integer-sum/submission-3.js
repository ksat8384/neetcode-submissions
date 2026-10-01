class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b)
        let n = nums.length
        let res = []
        for(let i=0;i<=n-3;i++){
            //To avoid duplicate nums[i] values
            if(i!==0 && nums[i]===nums[i-1]){
                continue
            }
            let left=i+1
            let right=n-1
            while(left<right){
                let target = nums[i]+nums[left]+nums[right]
                if(target>0){
                    //too high
                    right--
                }else if(target<0){
                    left++
                }else{
                    res.push([nums[i], nums[left], nums[right]])
                    left++
                    right--
                    //To avoid duplicate nums[left] values
                    while(left<right && nums[left]===nums[left-1]){
                        left++
                    }
                    //To avoid duplicate nums[right] values
                    while(left<right && nums[right]===nums[right+1]){
                        right--
                    }

                }
            }
        }
        return res
    }
}
