class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        
        let res = []
        let i=0;
        //first half, new interval start is greater than the current interval end
        while(i<intervals.length 
        && newInterval[0]>intervals[i][1]){
            res.push(intervals[i])
            i++
        }
        //new interval end is greater than current interval start
        while(i<intervals.length 
        && newInterval[1]>=intervals[i][0]){
            newInterval[0] = Math.min(intervals[i][0], newInterval[0])
            newInterval[1] = Math.max(intervals[i][1], newInterval[1])
            i++
        }
        res.push(newInterval)

      //remaining intervals that starts after the new interval ends
        while(i<intervals.length){
            res.push(intervals[i])
            i++
        }
        return res
    }
}
