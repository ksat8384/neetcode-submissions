class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let freqArray = new Array(26).fill(0)
        for(let task of tasks){
            freqArray[task.charCodeAt(0)-"A".charCodeAt(0)]++
        }
       
        let maxHeap = new MaxPriorityQueue()
        for(let freq of freqArray){
            if(freq!==0){
                maxHeap.enqueue(freq)
            }
        }

         let queue = []
         let time = 0   
         while(maxHeap.size()>0 || queue.length>0){
           time++
            if(maxHeap.size()>0){
                let remainingCount = maxHeap.pop()-1
                if(remainingCount>0){
                    queue.push([remainingCount, time+n])
                }
            }
            if(queue.length>0 && queue[0][1]===time){
                const readyTask = queue.shift()
                maxHeap.enqueue(readyTask[0])
            }
         }
         return time
    }
}
