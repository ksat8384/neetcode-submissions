class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let rows = matrix.length
        let columns = matrix[0].length
        let rowMarker = new Array(rows).fill(-1)
        let columnMarker = new Array(columns).fill(-1)

        for(let i=0; i<rows; i++){
            for(let j=0; j<columns; j++){
                if(matrix[i][j]==0){
                    rowMarker[i]=0
                    columnMarker[j]=0
                }
            }
        }

        for(let i=0; i<rows; i++){
            for(let j=0; j<columns; j++){
                if(rowMarker[i]==0 || columnMarker[j]==0){
                    matrix[i][j] = 0
                }
            }
        }

    }
}
