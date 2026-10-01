class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // index = count, value = number
        let buckets = Array.from({length: nums.length+1}, ()=>[])

        //key = num, value = count
        let freqMap = new Map()
        for(let num of nums){
            freqMap.set(num, (freqMap.get(num)||0) +1)
        }

        
        for(let [num, count] of freqMap){
            buckets[count].push(num)
        }
        let res = []
        for(let i=buckets.length-1; i>=0; i--){
            if(buckets[i].length>0){
                res = [...res, ...buckets[i]]
                if(res.length >=k){
                    break;
                }
            }
        }
        return res

    }
}
