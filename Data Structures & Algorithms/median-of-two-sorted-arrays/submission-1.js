class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {

        let n = nums1.length + nums2.length    
        let res = []
        let i=0
        let j=0
        for(let count =0; count<n; count++){
            if(i<nums1.length 
            && j<nums2.length 
            ){
                if(nums1[i]<nums2[j]){
                    res.push(nums1[i++])
                }else{
                    res.push(nums2[j++])
                }
            }

            if(i>=nums1.length && j<nums2.length){
                 res.push(nums2[j++])
            }
            if(j>=nums2.length && i<nums1.length){
                res.push(nums1[i++])
            }
        } 

        console.log("res = ", res)
        
        if(n % 2 === 0){
            return (res[Math.floor(n/2)] + res[Math.floor(n/2)-1])/2.0
        } 
        return res[Math.floor(n/2)]          
    }
}
