class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a,b)=>a[0]-b[0])
        let minOverlapCount = 0
        let prevEnd = intervals[0][1]
        for(let i=1; i<intervals.length; i++){
            if(prevEnd > intervals[i][0]){
                minOverlapCount++
                prevEnd = Math.min(intervals[i][1], prevEnd)
            }else{
                prevEnd = intervals[i][1]
            }
        }
        return minOverlapCount

    }
}
