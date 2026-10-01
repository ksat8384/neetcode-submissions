class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
       let length = temperatures.length
       let stack = []
       let result = new Array(length).fill(0)
       for(let i=0; i<length; i++){
        let currentTemp = temperatures[i]
        while(stack.length>0 && currentTemp > stack[stack.length-1][0] ){
            const [prevTemp, prevIndex] = stack.pop()
            result[prevIndex] = i-prevIndex
        }
        stack.push([currentTemp, i])
       }
       return result
    }
}
