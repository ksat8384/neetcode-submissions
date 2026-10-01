class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        let root = {}
        for(let word of words){
            let node = root
            for(let char of word){
                if(!node[char]){
                    node[char]={}
                }
                node=node[char]
            }
            node.word = word
        }

        let res = []
        for(let i=0;i<board.length;i++){
            for(let j=0; j<board[0].length;j++){
                this.dfs(board, i, j, root, res)
            }
        }
        return res       

    }

    dfs(board, i, j, root, res){
       
        if(i<0||i>=board.length || j<0||j>=board[0].length){
            return 
        }
        if(board[i][j]=="#")
            return 
        let char = board[i][j]
        if(!root[char]){
            return 
        }
        root = root[char]

        if(root.word){
            res.push(root.word)
            root.word=null 
        }

        board[i][j]="#"
        this.dfs(board, i+1, j, root, res)
        this.dfs(board, i-1, j, root, res)
        this.dfs(board, i, j+1, root, res)
        this.dfs(board, i, j-1, root, res)
        //backtrack
        board[i][j]=char
    }


}
