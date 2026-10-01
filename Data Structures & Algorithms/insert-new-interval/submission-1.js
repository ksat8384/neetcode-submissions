class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let result = []
        let index=0
        while(index < intervals.length){
            let interval = intervals[index]
            if(interval[1]<newInterval[0]){
                result.push(interval)
            }else{
                break
            }
             index++
        }

        while(index < intervals.length){
            let interval = intervals[index]
            if(interval[0]<=newInterval[1]){
                newInterval[0]=Math.min(interval[0], newInterval[0])
                newInterval[1]=Math.max(interval[1], newInterval[1])
            }else{
                break;
            }
            index++
        }
        result.push(newInterval)
        while(index<intervals.length){
            let interval = intervals[index]
            result.push(interval)
            index++
        }
        return result
    }
}
