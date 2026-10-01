class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxHeap = new MaxPriorityQueue()
        for(let stone of stones){
            maxHeap.enqueue(stone)
        }
        while(maxHeap.size()>1){
            let x = maxHeap.dequeue()
            let y = maxHeap.dequeue()
            if(x > y){
                maxHeap.enqueue(x-y)
            }
        }
        return maxHeap.size()===1?  maxHeap.dequeue(): 0 
        
    }
}
