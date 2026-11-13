class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if(hand.length % groupSize !== 0)
            return false

         let freqMap = new Map()
         for(let num of hand){
            freqMap.set(num, (freqMap.get(num)||0) +1)
         } 

         let minHeap = new MinPriorityQueue()
         for(let [key,value] of freqMap.entries()){
             minHeap.enqueue(key)
         }  

         while(minHeap.size()>0){
            let first = minHeap.front()
            for(let i=first; i<(first+groupSize); i++){
                if(!freqMap.get(i))
                    return false
                freqMap.set(i, freqMap.get(i)-1)   
                if(!freqMap.get(i)){
                    if(i !== minHeap.front())
                        return false
                    minHeap.dequeue()
                }
            }
         }
         return true
    }
}
