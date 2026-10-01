class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map()
        for(let num of nums){
            freqMap.set(num, (freqMap.get(num)||0)+1)
        }
        //freqArray : count -> []
        let freqArray = Array.from({length: nums.length+1},()=>[])
        for(let [num, count] of freqMap){
            freqArray[count].push(num)
        }

        let result = []
        for(let i=freqArray.length-1; i>=0; i--){
            if(freqArray[i].length>0){
                result=[...result, ...freqArray[i]]
            }
            if(result.length >=k){
                break;
            }
        }
        return result.slice(0, k)
    }









}
