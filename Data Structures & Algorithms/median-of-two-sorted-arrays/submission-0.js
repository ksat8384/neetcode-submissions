class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let n1 = nums1.length
        let n2 = nums2.length

         if(n1>n2){
            return this.findMedianSortedArrays(nums2, nums1)
         }   

         let total = n1+n2
         let half = Math.floor(total/2)

         let left = 0 // nums1 left index
         let right = nums1.length-1 // nums2 right index 

         while(true){
            let mid1 = Math.floor((left+right)/2)
            let mid2 = half - mid1 - 2

            let aLeft = mid1>=0? nums1[mid1] : -Infinity
            let aRight = mid1+1<nums1.length? nums1[mid1+1]: Infinity
            let bLeft = mid2>=0? nums2[mid2]: -Infinity
            let bRight = mid2+1<nums2.length? nums2[mid2+1]: Infinity
            //check valid partition
            if(aLeft<=bRight && bLeft<=aRight){
                if(total % 2 === 0){
                    //even
                    return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight))/2
                }else{
                    //odd
                    return Math.min(aRight, bRight)
                }
            }else if(aLeft>bRight){
                //reduce right index
                right = mid1-1
            }else{
                left = mid1+1
            }

         }
    }
}
