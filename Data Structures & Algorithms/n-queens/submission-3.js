class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let board = Array.from({length:n}, ()=>new Array(n).fill("."))

        let colSet = new Set()
        let positiveDiagonalSet = new Set()
        let negativeDiagonalSet = new Set()
        let res = []

        const backtrack=(row)=>{
            if(row==n){
                res.push(board.map((row)=>row.join('')))
                return
            }

            for(let col=0;col<n;col++){
                if(colSet.has(col) 
                || positiveDiagonalSet.has(row+col) 
                || negativeDiagonalSet.has(row-col)){
                    //try next col
                    continue
                }
                board[row][col]='Q'
                colSet.add(col)
                positiveDiagonalSet.add(row+col)
                negativeDiagonalSet.add(row-col)

                //move to next row
                backtrack(row+1)
               
                //backtrack
                board[row][col]='.'
                colSet.delete(col)
                positiveDiagonalSet.delete(row+col)
                negativeDiagonalSet.delete(row-col)
            }
        }

        backtrack(0)
        return res
    }

    
  
}
