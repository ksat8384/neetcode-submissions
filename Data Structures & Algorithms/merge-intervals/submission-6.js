class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if(intervals.length===0)
            return []
        intervals.sort((a,b)=>a[0]-b[0])
        let res = []
        res.push(intervals[0])

        for(let i=1; i<intervals.length; i++){
            let currentInterval = intervals[i]
            let lastInterval = res[res.length-1]
            if(lastInterval[1]>=currentInterval[0]){
                lastInterval[1] = Math.max(lastInterval[1], currentInterval[1])
            }else{
                res.push(currentInterval)
            }
        }
        return res
    }
}
