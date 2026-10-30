class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        let adjacencyList = Array.from({length: n}, ()=>[])
        for(let [src, dest, price] of flights){
            adjacencyList[src].push([price, dest]) //[cost, node]
        }
        let prices = new Array(n).fill(Infinity)
        prices[src]=0
        //BFS
        let queue = []
        queue.push([0, src])// [cost, node]

        let stops = k+1
        while(queue.length>0 && stops>0){
            let size = queue.length
            //process for all nodes at that level
            for(let i=0; i<size; i++){
                let [cost, node] = queue.shift()
                for(let [neighCost, neighNode] of adjacencyList[node])
                {
                    let newCost = cost + neighCost
                  if(prices[node]!==Infinity 
                  && newCost < prices[neighNode]) {
                    prices[neighNode] = newCost
                    queue.push([newCost, neighNode]) 
                  }  
                }
            }
            stops--
        }
        return prices[dst]!==Infinity? prices[dst]: -1
    }
   
}
