class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
       if(!height || height.length<3)
        return 0

       let maxLeft = 0
       let maxRight = 0
       let left = 0
       let right = height.length-1
       let result = 0
       while(left<right){
            if(height[left]<height[right]){
                if(maxLeft<=height[left]){
                    maxLeft = height[left]
                }else{
                    result += maxLeft-height[left]
                }
                left++
            }else{
                if(maxRight<=height[right]){
                    maxRight = height[right]
                }else{
                    result += maxRight-height[right]
                }
                right--
            }
       } 
       return result
    }
    
}
