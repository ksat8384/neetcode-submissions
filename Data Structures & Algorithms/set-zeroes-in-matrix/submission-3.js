class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let c0 = -1
        let rows = matrix.length
        let columns = matrix[0].length
        for(let i=0; i<rows; i++){
            for(let j=0; j<columns; j++){
                if(matrix[i][j]===0){
                    if(j==0){
                        c0 = 0
                    }else{
                        matrix[0][j]=0
                    }
                    matrix[i][0]=0
                }
            }
        }

         for(let i=1; i<rows; i++){
            for(let j=1; j<columns; j++){
                  if(matrix[i][0]==0 || matrix[0][j]==0){
                     matrix[i][j]=0
                  }
            }
         }
         
         if(matrix[0][0]==0){
            let j=0
            while(j<columns){
                matrix[0][j]=0
                j++
            }
         }

         if(c0==0){
            let i=0
            while(i<rows){
                matrix[i][0]=0
                i++
            }
         }
         
        
    }
}
