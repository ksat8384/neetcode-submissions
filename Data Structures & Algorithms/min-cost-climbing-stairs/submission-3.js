class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let n = cost.length
       let prev2 = cost[0]
       let prev1 = cost[1]
       for(let i=2;i<=n-1;i++){
         let current = cost[i]+Math.min(prev1, prev2)
         prev2 = prev1
         prev1 = current 
       }
       return Math.min(prev2, prev1)
    }
}
