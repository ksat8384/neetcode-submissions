class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
    let n = heights.length
    //PreviousSE stack
    let stack = []
    let res = 0 
    for(let i=0; i<n; i++){
        while(stack.length && heights[i]<heights[stack[stack.length-1]]){
            let elementIndex = stack[stack.length-1]
            stack.pop()
            let nse = i
            let pse = stack.length>0? stack[stack.length-1]: -1
            let element = heights[elementIndex]
            let area = element * (nse-pse-1)
            res = Math.max(res, area)
        }
        stack.push(i)
    }
    while(stack.length>0){
        let elementIndex = stack[stack.length-1]
        stack.pop()
        let nse = n
        let pse = stack.length>0? stack[stack.length-1]: -1
        let element = heights[elementIndex]
        let area = element * (nse-pse-1)
        res = Math.max(res, area)
    }
    return res
       
    }
    
}
