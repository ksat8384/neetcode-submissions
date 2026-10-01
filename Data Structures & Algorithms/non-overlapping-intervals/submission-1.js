class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a,b)=>a[0]-b[0])

        let res = []
        res.push(intervals[0])
        for(let i=1; i<intervals.length; i++){
           let prevInterval = res[res.length-1]
           let currentInterval = intervals[i]
           if(currentInterval[0]<prevInterval[1]){
             prevInterval[1] = Math.min(currentInterval[1], prevInterval[1])
           }else{
             res.push(currentInterval)
           }
        }
        return intervals.length - res.length
    }
}
