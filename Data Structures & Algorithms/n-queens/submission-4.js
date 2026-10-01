class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let board = Array.from({length:n}, ()=>new Array(n).fill('.'))
        let res = []

        let colSet = new Set()
        let posDiagSet = new Set()
        let negDiagSet = new Set()


        const backtrack = (row) =>{
            if(row === n){
                 res.push(board.map((row) => row.join('')))
                //update result and return
                return
            }

            for(let col=0; col<n; col++){
                if(colSet.has(col) 
                ||posDiagSet.has(row+col)
                ||negDiagSet.has(row-col)
                ){
                    //skip this col
                   continue     
                }

                colSet.add(col)
                posDiagSet.add(row+col)
                negDiagSet.add(row-col)
                board[row][col]='Q'

                backtrack(row+1)

                colSet.delete(col)
                posDiagSet.delete(row+col)
                negDiagSet.delete(row-col)
                board[row][col]='.'
            }    
        }
        backtrack(0)
        return res
        
    }
}
