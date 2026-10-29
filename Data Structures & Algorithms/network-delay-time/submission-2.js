class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        let adjList = Array.from({length:n+1}, ()=>[])
        for(let [src, dest, wt] of times){
            adjList[src].push([dest, wt])
        }

        let dist = new Array(n+1).fill(Infinity)
        const minPq = new MinPriorityQueue()
        dist[k]=0
        minPq.enqueue([0,k], 0)

        while(minPq.size()>0){
            let [d, u] = minPq.dequeue()
            if(dist[u]<d)
                continue
            for(let neighbor of adjList[u]){
                let v = neighbor[0]
                let wt = neighbor[1]
                if(dist[u]+wt < dist[v]){
                    dist[v] = dist[u]+wt 
                    minPq.enqueue([dist[v], v], dist[v])
                }
            }
        }

        let maxDelay = 0
        for(let i=1; i<=n; i++){
            if(dist[i]===Infinity)
                return -1
            maxDelay=Math.max(maxDelay,dist[i])     
        }
        return maxDelay
    }
}
