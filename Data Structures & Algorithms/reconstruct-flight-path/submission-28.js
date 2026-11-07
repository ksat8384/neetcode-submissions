class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        let adjacencyMap = new Map()
       for(let [src, dest] of tickets){
            if(!adjacencyMap.has(src))
                adjacencyMap.set(src, [])
           adjacencyMap.get(src).push(dest)     
       }
       for(let [src,destinations] of adjacencyMap.entries()){
         // Sort destinations in DESCENDING order (Z to A)
            destinations.sort((a,b)=>b.localeCompare(a))
       }
       let res = []
       const postOrderDfs = (src) => {
         let neighbours =  adjacencyMap.get(src) || []
         while(neighbours.length>0){
            let next = neighbours.pop()
            postOrderDfs(next)
         }
         res.push(src)
       }
       postOrderDfs("JFK")
       return res.reverse()
    }
}
