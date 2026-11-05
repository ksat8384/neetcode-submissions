class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        let existingCharacters = new Array(26).fill(false) 
        for(let word of words){
            for(let char of word){
                existingCharacters[char.charCodeAt(0)-'a'.charCodeAt(0)]=true
            }
        }
        let adjacencyList = Array.from({length:26}, ()=> new Set())
        let inDegree = new Array(26).fill(0) 
        let n = words.length
        for(let i=0; i+1<n; i++){
            let word1 = words[i]
            let word2 = words[i+1]
            let minLength = Math.min(word1.length, word2.length)
            if(word1.length>word2.length && word1.startsWith(word2)){
                return ""
            }
            for(let j=0; j<minLength; j++){
                let u = word1[j].charCodeAt(0)-'a'.charCodeAt(0)
                let v = word2[j].charCodeAt(0)-'a'.charCodeAt(0)
                if(word1[j]!==word2[j]){
                    if(!adjacencyList[u].has(v)){
                        adjacencyList[u].add(v)
                        inDegree[v]++
                    }
                    break;
                }
            }
        }

        //topological sort - khan's algo
            let queue = []
            for(let i=0; i<26; i++){
                if(existingCharacters[i]==true && inDegree[i]===0){
                    queue.push(i) 
                }
            }

            let result = []
            while(queue.length>0){
                let top = queue.shift() 
                result.push(String.fromCharCode(top+'a'.charCodeAt(0)))
                for(let neighbour of adjacencyList[top]){
                    inDegree[neighbour]--
                    if(inDegree[neighbour]===0){
                        queue.push(neighbour)
                    }
                }

            }
            

            if(result.length !== existingCharacters.filter(x => x===true).length){
                return ""
            }
            return result.join('')
        
    }
}
