class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
       intervals.sort((a,b)=>a[0]-b[0])

       let prevEnd = intervals[0][1]
       let minCount = 0
       for(let i=1; i<intervals.length; i++){
         let currentInterval = intervals[i]
         if(prevEnd>currentInterval[0]){
            minCount++
            prevEnd = Math.min(prevEnd, currentInterval[1])
         }else{
            prevEnd = currentInterval[1]
         }
       }
       return minCount
    }
}
