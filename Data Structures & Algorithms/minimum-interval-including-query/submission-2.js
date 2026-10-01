class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {

      intervals.sort((a,b)=>a[0]-b[0])  

      const sortedQueries = 
      queries
      .map((val, index)=>({val, index}))  
      .sort((a,b)=>a.val-b.val)

      let i = 0  
      let minHeap = new MinHeap()
      let res = new Array(queries.length)
      for(let query of sortedQueries){
         let qVal = query.val
         let qIndex = query.index
         while(i<intervals.length && intervals[i][0]<=qVal){
            let start = intervals[i][0]
            let end = intervals[i][1]
            minHeap.enqueue({length:end-start+1, end})
            i++
         }
         while(minHeap.size()>0 && minHeap.front().end<qVal){
            minHeap.dequeue()
         }
         res[qIndex] = minHeap.size()>0? minHeap.front().length : -1
      }
      return res  
    }

}

class MinHeap{
    constructor(){
        this.heap = []
    }
    size(){
        return this.heap.length
    }
    front(){
        if(this.heap.length==0)
            return null
        return this.heap[0]
    }
    compare(a,b){
        if(a.length !== b.length){
            return a.length<b.length
        }
        return a.end < b.end
    }
    enqueue(node){
        this.heap.push(node)
        this.heapifyUp()
    }
    heapifyUp(){
        let index = this.heap.length-1
        while(index>0){
            let parentIndex = Math.floor((index-1)/2)
            if(this.compare(this.heap[index], this.heap[parentIndex])){
                let temp = this.heap[index]
                this.heap[index]=this.heap[parentIndex]
                this.heap[parentIndex]=temp

                index = parentIndex
            }else{
                break;
            }
        }
    }
    dequeue(){
        if(this.heap.length===0)
            return null
        if(this.heap.length===1)   
            return this.heap.pop()
        let top = this.heap[0]
        this.heap[0]=this.heap[this.heap.length-1]
        this.heap.pop()
        if(this.heap.length>0){
            this.heapifyDown()
        }
        return top
    }

    heapifyDown(){
        let index = 0
        while(true){
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 2
            let smallest = index
            if(leftChildIndex<this.heap.length 
            && this.compare(this.heap[leftChildIndex], this.heap[smallest])){
                smallest = leftChildIndex
            }
              if(rightChildIndex<this.heap.length 
            && this.compare(this.heap[rightChildIndex], this.heap[smallest])){
                smallest = rightChildIndex
            }
            if(smallest===index){
                break;
            }else{
                let temp = this.heap[index]
                this.heap[index] = this.heap[smallest]
                this.heap[smallest]=temp

                index = smallest
            }

        }
    }
}
