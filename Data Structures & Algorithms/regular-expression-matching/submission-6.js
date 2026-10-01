class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
       
    //      a a ""
    //      0 1 2
    //   a 0x x F
    //   a 1x x F
    //   ""2x x T

       let dp = Array.from({length:s.length+1}, ()=>new Array(p.length+1).fill(false))
       //base case, both empty string
       dp[s.length][p.length]=true

       for(let i=s.length; i>=0; i--){
        for(let j=p.length-1; j>=0; j--){
            let match = i<s.length && (s[i]==p[j] || p[j]==='.')

            if(j+1 < p.length && p[j+1]==="*"){
                //not use and use
                dp[i][j] = dp[i][j+2] || (match && dp[i+1][j])
            }else if(match){
                dp[i][j] = dp[i+1][j+1]
            }else{
                dp[i][j]=false
            }
        }
       }
       return dp[0][0]
    }

    // dfs(i, j, s, p, cache){
    //     let key = `(${i},${j})`
    //     if(cache.has(key))
    //         return cache.get(key)
    //     if(i>=s.length && j>=p.length)
    //         return true
    //     if(j>=p.length)
    //         return false
    //     let match = i<s.length && (s[i]===p[j] || p[j]=='.')
    //     if(j+1<p.length && p[j+1]=='*'){
    //         //don't use, matches zero
    //         cache.set(key, this.dfs(i,j+2, s, p, cache) 
    //         //use, matches
    //         || (match && this.dfs(i+1, j, s, p, cache)))
    //         return cache.get(key)
    //     }  
    //     if(match){
    //          cache.set(key, this.dfs(i+1, j+1, s, p, cache))
    //          return cache.get(key)
    //     }
    //    cache.set(key,false)    
    //     return cache.get(key)     
    // }
}
