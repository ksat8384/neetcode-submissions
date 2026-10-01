class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let previousSE = this.previousSmallerElementIndex(heights)
        let nextSE = this.nextSmallerElementIndex(heights) 

        let n = heights.length
        let res = 0
        for(let i=0; i<n; i++){
            let width = (nextSE[i] - previousSE[i] - 1)
            let currentRectangleArea = heights[i] * width
            res = Math.max(res, currentRectangleArea)
        }
        return res
       
    }

    previousSmallerElementIndex(heights){
        let n = heights.length
        let previousSE = new Array(n)
        let stack = []
        for(let i=0; i<n; i++){
            while(stack.length && heights[i]<=heights[stack[stack.length-1]]){
                stack.pop()
            }
            if(stack.length){
                previousSE[i]=stack[stack.length-1]
            }else{
                previousSE[i]=-1
            }
            stack.push(i)
        }
        return previousSE
    }

    nextSmallerElementIndex(heights){
        let n = heights.length
        let nextSE = new Array(n)
        let stack=[]
        for(let i=n-1; i>=0; i--){
            while(stack.length && heights[i] <= heights[stack[stack.length-1]]){
                stack.pop()
            }
            if(stack.length){
                nextSE[i] = stack[stack.length-1]
            }else{
                nextSE[i] = n
            }
            stack.push(i)
        }
        return nextSE
    }
}
