class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        if(!wordList.includes(endWord))
            return 0
        let adjacencyList = new Map() // pattern: [word1, word2]
        wordList.push(beginWord)
        for(let word of wordList){
            let n = word.length
            for(let j=0; j<n; j++){
                let pattern = word.slice(0,j)+'*'+word.slice(j+1,n)
                if(!adjacencyList.has(pattern)){
                    adjacencyList.set(pattern, [])
                }
                adjacencyList.get(pattern).push(word)
            }
        }

        let queue = []
        queue.push(beginWord)
        let visited = new Set()
        visited.add(beginWord)
        let res = 1
        while(queue.length>0){
            let length = queue.length
            for(let i=0; i<length; i++){
               let word = queue.shift()
               if(word===endWord)
                    return res
                let neighbors = []   
                let n = word.length 
                for(let j=0; j<n; j++){
                    let pattern = word.slice(0,j)+'*'+word.slice(j+1,n)
                    neighbors.push(...adjacencyList.get(pattern))
                }
                for(let neighbor of neighbors){
                    if(!visited.has(neighbor)){
                        visited.add(neighbor)
                        queue.push(neighbor)
                    }
                }
            }
            res++
        }
        return 0
    }
}
