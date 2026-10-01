class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let adjList = Array.from({length: numCourses}, ()=>[])
        let inDegree = new Array(numCourses).fill(0)
        for(let [destn, src] of prerequisites){
                adjList[src].push(destn)
                inDegree[destn]++
        }
        let queue = []
        for(let i=0; i<inDegree.length; i++){
            if(inDegree[i]==0){
                queue.push(i)
            }
        }
        let result = []
        while(queue.length>0){
            let top = queue.shift()
            result.push(top)
            for(let neighbour of adjList[top]){
                inDegree[neighbour]--
                if(inDegree[neighbour]==0){
                    queue.push(neighbour)
                }
            }
        }
        return result.length == numCourses
    }

}
