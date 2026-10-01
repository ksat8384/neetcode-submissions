class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let n1 = nums1.length
        let n2 = nums2.length
        let n = n1+n2
        let i=0
        let j=0
        let mid = -1
        let mid2 = -1
        for(let count=0; count<=n/2; count++){
            mid2 = mid
            if(i<n1 && j<n2){
                if(nums1[i]<nums2[j]){
                    mid = nums1[i++]
                }else{
                    mid = nums2[j++]
                }
            }else if(i<n1){
                mid = nums1[i++]
            }else if(j<n2){
                mid = nums2[j++]
            }
        }
        if(n%2===0)
            return (mid+mid2)/2.0
        
        return mid
    }
}
