class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length
        let leftProduct = new Array(n).fill(1)
        leftProduct[0]=1
        for(let i=1; i<n; i++){
            leftProduct[i] = nums[i-1]*leftProduct[i-1]
        }

        let rightProduct = new Array(n).fill(1)
        rightProduct[n-1]=1
        for(let i=n-2; i>=0; i--){
            rightProduct[i]=nums[i+1]*rightProduct[i+1]
        }

        let productArray = new Array(n).fill(1)
        for(let i=0; i<n;i++){
            productArray[i] =  leftProduct[i] * rightProduct[i]
        }
        return productArray
    }
}
