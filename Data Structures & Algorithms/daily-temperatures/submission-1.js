class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let n = temperatures.length
        let res = new Array(n).fill(0)
        //monotonic stack
        let stack = []
        for(let i=0; i<n; i++){
            let currentTemp = temperatures[i]
            while(stack.length>0 && currentTemp > stack[stack.length-1][0]){
                const [prevTemp, prevIndex] = stack.pop()
                res[prevIndex] = i - prevIndex
            }
            stack.push([currentTemp, i])
        }
         return res
    }
   
}
