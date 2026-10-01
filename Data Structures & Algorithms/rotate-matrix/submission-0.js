class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        this.transpose(matrix)
        matrix.map((arr)=>arr.reverse())
        return matrix
    }
    transpose(matrix){
        let n = matrix.length
        for(let i=0; i<n; i++){
            for(let j=i+1; j<n;j++){
                    let temp = matrix[i][j]
                    matrix[i][j] = matrix[j][i]
                    matrix[j][i] = temp
            }
        }
    }
}
