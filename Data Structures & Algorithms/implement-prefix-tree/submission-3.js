class PrefixTree {
    constructor() {
        this.root = Object.create(null)
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root
        for(let char of word){
            if(!node[char]){
                node[char]=Object.create(null)
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
        let node = this.root
        for(let char of word){
            if(!node[char]){
                return false
            }
            node = node[char]
        }
        return node.isEndOfWord == true
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root
        for(let char of prefix){
            if(!node[char]){
                return false
            }
            node = node[char]
        }
        return true
    }
}
