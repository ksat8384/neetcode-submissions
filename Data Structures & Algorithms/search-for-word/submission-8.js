class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        if(!board || board.length === 0)
            return false
        let rows = board.length
        let cols = board[0].length
        for(let i=0; i<rows;i++){
            for(let j=0; j<cols;j++){
                if(board[i][j]===word[0]){
                     if(this.dfs(board, i, j, word, 0, rows, cols))
                        return true
                }
            }
        }
        return false
    }
    dfs(board, i, j, word, index, rows, cols){
       
        
        if(i<0 || i>=rows || j<0 || j>=cols || board[i][j]!==word[index] || board[i][j]==="#")
        return false

         if(index===word.length-1)
            return true
        
        let temp = board[i][j]
        board[i][j]="#"
        index++
        if(this.dfs(board, i+1, j, word, index, rows, cols)||
        this.dfs(board, i-1, j, word, index, rows, cols)||
        this.dfs(board, i, j+1, word, index, rows, cols)||
        this.dfs(board, i, j-1, word, index, rows, cols)){
            return true
        }
        //backtracking
        board[i][j]=temp
        return false
    }
}
