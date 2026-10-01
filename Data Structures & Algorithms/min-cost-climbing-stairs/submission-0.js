class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let dp = new Array(cost.length+1).fill(0)
        cost.push(0)
        dp[cost.length-2]=cost[cost.length-2]
        for(let i=cost.length-3; i>=0; i--){
            dp[i] = cost[i] + Math.min(dp[i+1], dp[i+2])
        }
        return Math.min(dp[0], dp[1])
    }
}
