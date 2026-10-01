class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        if(numCourses == 0)
            return false
        let adjacencyList = Array.from({length:numCourses}, ()=>[])
        let inDegree = new Array(numCourses).fill(0)
        for(let [dest, src] of prerequisites){
            adjacencyList[src].push(dest)
            inDegree[dest]++
        }
        let queue = []
        //khan's algorithm - topological sort
        for(let i=0; i<numCourses; i++){
            if(inDegree[i]===0){
               queue.push(i)     
            }
        }

        let count = 0
        while(queue.length>0){
            let top = queue.shift()
            count++
            for(let neighbor of adjacencyList[top]){
                inDegree[neighbor]--
                if(inDegree[neighbor] === 0){
                    queue.push(neighbor)
                }
            }
        }
        return count === numCourses? true : false
    }
}
