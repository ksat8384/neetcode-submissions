class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
        let cache = new Map()
        return this.dfs(0,0,s,p, cache)
    }

    dfs(i, j, s, p, cache){
        let key = `(${i},${j})`
        if(cache.has(key))
            return cache.get(key)
        if(i>=s.length && j>=p.length)
            return true
        if(j>=p.length)
            return false
        let match = i<s.length && (s[i]===p[j] || p[j]=='.')
        if(j+1<p.length && p[j+1]=='*'){
            //don't use, matches zero
            cache.set(key, this.dfs(i,j+2, s, p, cache) 
            //use, matches
            || (match && this.dfs(i+1, j, s, p, cache)))
            return cache.get(key)
        }  
        if(match){
             cache.set(key, this.dfs(i+1, j+1, s, p, cache))
             return cache.get(key)
        }
       cache.set(key,false)    
        return cache.get(key)     
    }
}
