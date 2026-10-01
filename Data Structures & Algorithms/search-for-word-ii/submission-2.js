class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        let root = this.buildTrie(words)

        let result = []
        for(let i=0; i<board.length; i++){
            for(let j=0; j<board[0].length; j++){
                this.dfs(board, i, j, root, result)
            }
        }
        return result
    }

    dfs(board, i, j, root, result){
       
        if(i<0 || i>=board.length || j<0 || j>=board[0].length){
            return
        }
        let char = board[i][j]
        if(!root[char]){
            return
        }
        root = root[char]

         if(root.word){
            result.push(root.word)
            root.word=null
        }

        board[i][j]="#"

        this.dfs(board, i+1, j, root, result)
        this.dfs(board, i-1, j, root, result)
        this.dfs(board, i, j+1, root, result)
        this.dfs(board, i, j-1, root, result)

        //backtracking
        board[i][j]=char

    }

    buildTrie(words){
        let root = {}
        for(let word of words){
            let node = root
            for(let char of word){
                if(!node[char]){
                    node[char]={}
                }
                node = node[char]
            }
            node.word=word
        }
        return root
    }
}
