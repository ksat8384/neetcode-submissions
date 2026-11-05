class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
      let presentCharacters = new Array(26).fill(false)
       for(let word of words){
        for(let char of word){
            presentCharacters[char.charCodeAt(0)-'a'.charCodeAt(0)]=true
        }
       }

       let adjacencyList = Array.from({length: 26}, ()=>[])
        let inDegree = new Array(26).fill(0)
       let n = words.length 
       for(let j=0; j+1<n; j++){
         let word1 = words[j]
         let word2 = words[j+1]
         if (word1.length > word2.length && word1.startsWith(word2)) {
             return "";
         }
         let minLengthWord = Math.min(word1.length, word2.length)
          for(let i=0; i<minLengthWord; i++){
            if(word1[i]!==word2[i]){
                let u = word1[i].charCodeAt(0)-'a'.charCodeAt(0)
                let v = word2[i].charCodeAt(0)-'a'.charCodeAt(0)
                adjacencyList[u].push(v)            
                inDegree[v]++
                break;
                
            }
         }
       }

        let queue = []
         //topological sort
         for(let i=0; i<26; i++){
            if(presentCharacters[i] && inDegree[i]===0){
                queue.push(i)    
            }
         }

        let res = []
         while(queue.length>0){
            let top = queue.shift()
            res.push(String.fromCharCode(top+'a'.charCodeAt(0)))//To covert char code to char back
            for(let neighbor of adjacencyList[top]){
                inDegree[neighbor]--
                if(inDegree[neighbor]===0)
                    queue.push(neighbor)
            }
         }

         if(res.length !== presentCharacters.filter(x=>x!==false).length)
            return ""

         return res.join("")   
    }
}
