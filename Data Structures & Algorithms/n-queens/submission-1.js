class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        //index=row, value=column
        let queens = new Array(n)
        //
        let cols = new Set()
        let positiveDiagonals = new Set()
        let negativeDiagonals = new Set()

        let result = []
        const backtrack = (row) => {
            if(row === n){
                result.push(queens.map((col)=>'.'.repeat(col)+"Q"+".".repeat(n-1-col)))
                return
            }
            for(let col=0; col<n; col++){
                if(cols.has(col) 
                || positiveDiagonals.has(row+col)
                || negativeDiagonals.has(row-col)
                ){
                    continue
                }

                //mark it in set
                cols.add(col)
                positiveDiagonals.add(row+col)
                negativeDiagonals.add(row-col)
                //mark the queen position
                queens[row] = col
                
                backtrack(row+1)

                //backtrack
                cols.delete(col)
                positiveDiagonals.delete(row+col)
                negativeDiagonals.delete(row-col)
            }
        }

        backtrack(0)
        return result
    }

}
