class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        if (!matrix || matrix.length === 0 || matrix[0].length === 0) return [];
       
       let left=0 //column
       let right=matrix[0].length-1 //column
       let top=0 //row
       let bottom=matrix.length-1 //row
       let res=[]
       while(left<=right && top<=bottom){
        //left to right
        for(let i=left; i<=right; i++){
            res.push(matrix[top][i])
        }
        top++
        //top to bottom
        for(let i=top; i<=bottom; i++){
            res.push(matrix[i][right])
        }
        right--
        if(top<=bottom){
             //right to left
            for(let i=right; i>=left; i--){
                res.push(matrix[bottom][i])
            }
            bottom--
        }
       
       if(left<=right){
         //bottom to top
            for(let i=bottom; i>=top; i--){
                res.push(matrix[i][left])
            }
            left++
        }
       }
       return res
    }
    
}
