class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let n1 = nums1.length
        let n2 = nums2.length
          //ensure n1 has less elements 
    if(n1>n2){
        return this.findMedianSortedArrays(nums2, nums1)
    }
        let total = n1+n2
        let half = Math.floor(total/2)

        let l=0
        let r=n1-1

        while(true){
            let i = Math.floor((l+r)/2)
            let j = half-i-2

            let aLeft = i>=0 ? nums1[i] : -Infinity
            let aRight = i+1<nums1.length ? nums1[i+1]: Infinity
            let bLeft = j>=0? nums2[j] : -Infinity 
            let bRight = j+1<nums2.length? nums2[j+1]: Infinity

            //check partition correctness
            if(aLeft <= bRight && bLeft <= aRight){
                if(total % 2 === 0){
                    //even
                    return (Math.max(aLeft, bLeft) + Math.min(aRight,bRight))/2
                }else{
                    //odd
                    return Math.min(aRight, bRight)
                }
            }else if(aLeft > bRight){
                r = i-1
            }else{
                l = i+1
            }
        }

    }
}
