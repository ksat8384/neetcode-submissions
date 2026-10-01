class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
         const dfs=(i, j, oldChar, newChar)=>{
            if(i<0||i>=rows ||j<0||j>=cols ||board[i][j]!==oldChar)
                return
            board[i][j]=newChar
            dfs(i+1, j, oldChar, newChar)
            dfs(i-1, j, oldChar, newChar) 
            dfs(i, j+1, oldChar, newChar)
            dfs(i, j-1, oldChar, newChar)       
        }

        let rows = board.length
        let cols = board[0].length
        for(let j=0; j<cols;j++){
            if(board[0][j]==='O')
                //convert O to T
                dfs(0,j,'O','T')
            if(board[rows-1][j]==='O')   
                 //convert O to T
                dfs(rows-1,j,'O','T') 
        }

        for(let i=0;i<rows;i++){
            if(board[i][0]==='O')
                 //convert O to T
                dfs(i,0,'O','T')
            if(board[i][cols-1]==='O')
             //convert O to T
                dfs(i,cols-1,'O','T')
        }

          const changeToXdfs = (i,j)=>{
            if(i<0||i>=rows ||j<0||j>=cols ||board[i][j]!=='O')
                return
            board[i][j]='X'
            changeToXdfs(i+1, j)
            changeToXdfs(i-1, j) 
            changeToXdfs(i, j+1)
            changeToXdfs(i, j-1)         
        }

        for(let i=0;i<rows;i++){
            for(let j=0;j<cols;j++){
                if(board[i][j]==='O'){
                    board[i][j]='X'
                }else if(board[i][j]==='T'){
                    board[i][j]='O'
                }
            }
        }

      
      

    }
}
