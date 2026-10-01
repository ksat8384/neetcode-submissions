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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let start = []
        let end = []
      for(let interval of intervals){
         start.push(interval.start)
         end.push(interval.end)   
      }
      start.sort((a,b)=>a-b)
      end.sort((a,b)=>a-b)

      let i=0
      let j=0
      let n = intervals.length
      let count=0
      let maxCount=0
      while(i<n){
        if(start[i]<end[j]){
            count++
            i++
        }else{
            count--
            j++
        }
        maxCount = Math.max(maxCount, count)
      }
      return maxCount
    }
}
