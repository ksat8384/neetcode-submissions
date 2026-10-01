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
            let y = maxHeap.dequeue()
            let x = maxHeap.dequeue()
            if(x<y){
                maxHeap.enqueue(y-x)
            }
        }
        return maxHeap.size()>0? maxHeap.front(): 0
    }
}
