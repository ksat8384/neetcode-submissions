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
                if(board[i][j]==word[0] && this.dfs(board,i,j,word,0)){
                    return true    
                }
            }
        }
        return false
    }

    dfs(board,i,j,word, index){
        if(index===word.length){
            return true
        }
        if(i<0 || i>=board.length || j<0 ||j>=board[0].length){
            return false
        }
        if(board[i][j] !== word[index]){
            return false
        }
        let temp = board[i][j]
        board[i][j]="#"
        index++
        if(this.dfs(board,i,j-1,word, index)||
        this.dfs(board,i,j+1,word, index)||
        this.dfs(board,i-1,j,word, index)||
        this.dfs(board,i+1,j,word, index)){
            return true
        }
        //backtrack
        board[i][j]=temp
        return false
    }
}
