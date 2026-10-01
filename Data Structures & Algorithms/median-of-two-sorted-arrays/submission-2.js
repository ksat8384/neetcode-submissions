class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let n1= nums1.length
        let n2 = nums2.length
        let n = n1+n2
        let i=0
        let j=0
        let mergedArray = []
        while(i<n1 && j<n2){
            if(nums1[i]<nums2[j]){
                mergedArray.push(nums1[i])
                i++
            }else{
                mergedArray.push(nums2[j])
                j++
            }
        }
        while(i<n1){
            mergedArray.push(nums1[i])
            i++
        }
        while(j<n2){
            mergedArray.push(nums2[j])
            j++
        }

        if(n % 2 === 0){
            //even length
            return (mergedArray[Math.floor(n/2)] + mergedArray[Math.floor(n/2)-1])/2
        }

        return mergedArray[Math.floor(n/2)]
        
        
    }
}
