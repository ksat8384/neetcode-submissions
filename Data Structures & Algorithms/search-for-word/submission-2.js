class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let rows = board.length
        let cols = board[0].length
        for(let i=0; i<rows; i++){
            for(let j=0; j<cols; j++){
                if(word[0]==board[i][j] && this.dfs(board, i, j, rows, cols, 0, word)){
                    return true
                }
            }
        }
        return false
    }

    dfs(board, i, j, rows, cols, index, word){
        if(index === word.length)
            return true
        //out of bounds
        if(i<0 || i>=rows || j<0 || j>=cols ){
            return false
        }
        if(board[i][j] !== word[index])
            return false

        let temp = board[i][j]
        board[i][j]="#"

        index = index+1  
        if(this.dfs(board, i+1, j, rows, cols, index, word)||
        this.dfs(board, i-1, j, rows, cols, index, word)||
        this.dfs(board, i, j+1, rows, cols, index, word)||
        this.dfs(board, i, j-1, rows, cols, index, word)){
            return true  
        }  
        board[i][j]=temp  
        return false    
    }
}
