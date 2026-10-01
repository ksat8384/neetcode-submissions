/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a,b)=>a.start-b.start)

        for(let i=1; i<intervals.length; i++){
            let currentInterval = intervals[i]
            let prevInterval = intervals[i-1]
            if(currentInterval.start<prevInterval.end){
                return false
            }
        }
        return true
    }
}
