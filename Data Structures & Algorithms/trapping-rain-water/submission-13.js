class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
         if(!height || height.length<3)
        return 0

        let maxLeft=0
        let maxRight=0

        let i=0
        let j=height.length-1
        let maxWater = 0
        while(i<j){
            if(height[i]<height[j]){
                maxWater += Math.max(0, maxLeft-height[i])
                maxLeft = Math.max(maxLeft, height[i]) 
                i++   
            }else{
                maxWater += Math.max(0, maxRight-height[j])
                maxRight=Math.max(maxRight, height[j]) 
                j-- 
            }
        }
        return maxWater
    }
}
