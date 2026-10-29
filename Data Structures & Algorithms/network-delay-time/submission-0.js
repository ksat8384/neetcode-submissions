class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        let dist = new Array(n+1).fill(Infinity)
        dist[k]=0
        //bellman-ford runs for V-1 times
        for(let i=1; i<n; i++){
            for(let edge of times){
                let u=edge[0]
                let v=edge[1]
                let wt=edge[2]
                if(dist[u]!==Infinity && dist[u]+wt < dist[v]){
                    dist[v]=dist[u]+wt
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
