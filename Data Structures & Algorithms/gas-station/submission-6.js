class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
       let n = gas.length
       let totalGas = gas.reduce((acc, val)=>acc+val,0)
       let totalCost = cost.reduce((acc, val)=>acc+val,0)
       if(totalGas<totalCost)
            return -1

       let start=0
       let tank=0
       for(let i=0; i<n; i++){
         tank = tank+gas[i]-cost[i]
         if(tank<0){
            start=i+1
            tank=0
         }
       } 
       return start    
    }
}
