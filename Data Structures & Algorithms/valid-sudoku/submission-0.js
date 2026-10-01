class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowSet = Array.from({length: 9}, ()=>new Set())
        let colSet = Array.from({length: 9}, ()=>new Set())
        let boxSet = Array.from({length: 9}, ()=>new Set())

        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++){
                let val = board[i][j]
                if(val === "."){
                    continue
                }
                let boxIndex = Math.floor(i/3)*3 + Math.floor(j/3)
                if(rowSet[i].has(val) || colSet[j].has(val) || boxSet[boxIndex].has(val)){
                    return false
                }
                rowSet[i].add(val)
                colSet[j].add(val)
                boxSet[boxIndex].add(val)
            }
        }
        return true
    }
}
