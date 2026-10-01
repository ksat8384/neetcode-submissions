class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let board = Array.from({length: n}, ()=>new Array(n).fill("."))

        const isSafe = (row, col)=>{
            //check col in previous rows
            for(let i=0; i<row; i++){
                if(board[i][col]==="Q")
                    return false
            }
            //check upper diagonal on the left side
            for(let i=row-1,j=col-1; i>=0 && j>=0; i--,j--){
                if(board[i][j]==="Q"){
                    return false
                }
            }
            //check upper diagonal on the right side
            for(let i=row-1,j=col+1; i>=0 && j<n; i--,j++){
                if(board[i][j]==="Q")
                    return false
            }
            return true
        }
        let result = []

        const backtrack = (row) => {
            if(row === n){
                result.push(board.map((r)=>r.join("")))
               return     
            }
            for(let col=0; col<n; col++){
                 if(isSafe(row, col)){
                    board[row][col]="Q"
                    backtrack(row+1)
                    //backtrack
                    board[row][col]="."
                 }
            }
        }
        backtrack(0)
        return result

    }

}
