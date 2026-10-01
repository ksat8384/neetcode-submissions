class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let n = board.length
        let rowSet = Array.from({length: n}, ()=>new Set())
        let colSet = Array.from({length: n}, ()=>new Set())
        let boxSet = Array.from({length: n}, ()=>new Set())

        let rows = board.length
        let cols = board[0].length

        for(let i=0; i<rows; i++){
            for(let j=0; j<cols; j++){
                let key = board[i][j]
                if(key===".")
                  continue
                let boxIndex = Math.floor(i/3)*3+Math.floor(j/3)
                if(rowSet[i].has(key) || colSet[j].has(key)|| boxSet[boxIndex].has(key)){
                    return false
                }
                rowSet[i].add(key)
                colSet[j].add(key)
                boxSet[boxIndex].add(key)
            }
        }
        return true
        
    }
}
