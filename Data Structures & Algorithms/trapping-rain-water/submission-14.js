class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
         if(!height || height.length<3)
        return 0

        let maxLeft=height[0]
        let maxRight=height[height.length-1]

        let i=1
        let j=height.length-2
        let maxWater = 0
        while(i<=j){
            if(maxLeft<=maxRight){
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
