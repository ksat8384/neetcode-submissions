class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let rows = board.length
        let columns = board[0].length
        for(let i=0; i<rows; i++){
            for(let j=0; j<columns; j++){
                if(word[0]===board[i][j] && this.dfs(board, word, i, j, 0)){
                    return true
                }
            }
        }
        return false
    }

    dfs(board, word, i, j, index){
        if(index === word.length){
            return true
        }
        if(i<0 || i>=board.length || j<0 || j>=board[0].length || board[i][j]==="#"){
            return false
        }
        if(board[i][j] !== word[index]){
            return false
        }
        let temp = board[i][j]
        board[i][j]="#"
        if(this.dfs(board, word, i+1, j , index+1)||
        this.dfs(board, word, i-1, j , index+1)||
        this.dfs(board, word, i, j+1 , index+1)||
        this.dfs(board, word, i, j-1 , index+1)){
            return true
        }
        //backtracking
        board[i][j]=temp
        return false
    }
}
