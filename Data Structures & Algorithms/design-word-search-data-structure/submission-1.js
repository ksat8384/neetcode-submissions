class WordDictionary {
    constructor() {
        this.root = {}
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root
        for(let char of word){
            if(!node[char]){
                node[char]={}       
            }
            node = node[char]    
        }
        node.isEndOfWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) { 
        return this.dfs(word, 0, this.root)
    }

    dfs(word, index, root){
        if(index===word.length){
            return root['isEndOfWord']===true
        }
        let char = word[index]
        if(char ==='.'){
            for(let key in root){
               if(this.dfs(word, index+1, root[key])){
                    return true
               }
            }
        }else{
            if(root[char]){
                if(this.dfs(word, index+1, root[char])){
                    return true
               }
            }
        }
        return false
    }
}
