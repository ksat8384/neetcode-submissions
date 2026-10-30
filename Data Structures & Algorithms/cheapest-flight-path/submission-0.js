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
        let prices = new Array(n).fill(Infinity)
        prices[src]=0
        //modified bellman-ford
        for(let i=0; i<k+1; i++){
            let temp = [...prices] // copy
            for(let [src, dest, price] of flights){
                if(prices[src]!==Infinity && prices[src]+price < temp[dest]){
                    temp[dest]=prices[src]+price 
                }
            }
            prices = temp
        }
         return prices[dst]===Infinity? -1: prices[dst]
    }
   
}
