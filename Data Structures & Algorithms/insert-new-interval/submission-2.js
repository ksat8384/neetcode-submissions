class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
       let n = intervals.length
       let result = []
       let index = 0
       while(index<n && intervals[index][1]<newInterval[0]){
            result.push(intervals[index])
            index++
       }
       while(index<n && intervals[index][0]<=newInterval[1]){
          newInterval[0]= Math.min(newInterval[0], intervals[index][0])
          newInterval[1]= Math.max(newInterval[1], intervals[index][1])
          index++
       }
       result.push(newInterval)
       while(index<n){
        result.push(intervals[index])           
        index++
       }
       return result
    }
}
