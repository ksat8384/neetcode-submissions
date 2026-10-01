class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if(intervals.length === 0)
            return []
        if(intervals.length === 1)   
            return intervals

        intervals.sort((a,b)=>a[0]-b[0])

        let res = []
        res.push(intervals[0])
        for(let i=1; i<intervals.length; i++){
            let prevInterval = res[res.length-1]
            let currentInterval = intervals[i]
            if(currentInterval[0]<=prevInterval[1]){
                prevInterval[0]=Math.min(prevInterval[0], currentInterval[0])
                prevInterval[1]=Math.max(prevInterval[1], currentInterval[1])
            }else{
                res.push(currentInterval)
            }
        }
        return res
    }
}
