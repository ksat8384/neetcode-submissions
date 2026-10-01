class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let dependencyArray = Array.from({length: numCourses}, ()=>[])
        let inDegree = new Array(numCourses).fill(0)
        for(let [dest, src] of prerequisites){
            dependencyArray[src].push(dest)
            inDegree[dest]++
        }

        let queue = []
        for(let i=0; i<numCourses; i++){
            if(inDegree[i]===0)
                queue.push(i)
        }

        let count = 0
        let head = 0
        while (head<queue.length){
            let top = queue[head++]
            count++
            for(let neighbor of dependencyArray[top]){
                inDegree[neighbor]--
                if(inDegree[neighbor]===0)
                    queue.push(neighbor)
            }
        }
        return count === numCourses
    }
}
