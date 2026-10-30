class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        //create adjacency list
        let adjList = Array.from({length:n+1}, ()=>[])
        let minHeap = new MinPriorityQueue()
        for(let [u, v, wt] of times){
            adjList[u].push([v, wt])
        }
        //create distance array, default all to infinity
        let dist = new Array(n+1).fill(Infinity)
        //update distance array of src node to 0
        dist[k]=0
        //push src node [distance, node] in minHeap
        minHeap.enqueue([0, k], 0)//distance, node
        //loop until minHeap is empty
        while(minHeap.size()>0){
            let [d, u] = minHeap.dequeue()
            for(let [v, wt] of adjList[u]){
                if(dist[u]!==Infinity && dist[u]+wt<dist[v]){
                    dist[v]=dist[u]+wt
                    minHeap.enqueue([dist[v], v], dist[v])
                }    
            }
        }
    let maxDelay = 0
    for(let i=1; i<=n; i++){
        if(dist[i]===Infinity)
            return -1
        maxDelay = Math.max(maxDelay, dist[i])    
    }
    return maxDelay

    }
}
