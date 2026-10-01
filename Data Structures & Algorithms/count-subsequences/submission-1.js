class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        let dp = new Map() // key(i,j), value=count
        return this.dfs(0, 0, s, t, dp)
    }
    dfs(i, j, s, t, dp){
        if(j===t.length)
            return 1
        if(i===s.length)
            return 0
        let key = `${i},${j}`    
        if(dp.has(key))
            return dp.get(key) 
        let val = 0       
        if(s[i]===t[j]){
            val = this.dfs(i+1,j+1, s, t, dp) + this.dfs(i+1,j, s, t, dp)
        }else{
            val= this.dfs(i+1,j, s, t, dp)
        }
        dp.set(key, val)
        return val
    }

//
    // s = "caat"
    // t = "cat"
    // if(s[i]===t[j])
    //     dfs(i+1, j+1) + dfs(i+1,j)
    // else
    //     dfs(i+1, j) 

    // //base case
    // if(j==t.length)
    //     return 1  
    // if(i==s.length)
    //     return 0         

}
