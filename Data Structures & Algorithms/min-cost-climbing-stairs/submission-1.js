class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let next1 = 0
        let next2 = 0
        for(let i=cost.length-1; i>=0; i--){
            let current = cost[i] + Math.min(next1, next2)
            next2 = next1
            next1 = current
            
        }
        return Math.min(next1, next2)
    }
}
