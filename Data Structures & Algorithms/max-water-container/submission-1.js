class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0
        let j = heights.length-1
        let maxVolume = 0
        while(i<j){
           let minHeight = Math.min(heights[i], heights[j])
           let width = j-i 
           let currentVolume = width * minHeight
           maxVolume = Math.max(maxVolume, currentVolume)
           if(heights[i] < heights[j]){
                i++
           }else{
                j--
           }
        }
        return maxVolume
    }
}
