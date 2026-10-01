class WordDictionary {
    constructor() {
        this.root={}
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
       return this.dfs(word, this.root, 0)
    }

    dfs(word, root, index){
        if(word.length === index){
            return root['isEndOfWord']===true
        }
        let char = word[index]
        if(char ==='.'){
            for(let key in root){
                if(this.dfs(word, root[key], index+1)){
                    return true
                }
            }
        }else{
            if(root[char]){
                return this.dfs(word, root[char], index+1)
            }
        }
        return false
    }

}
