class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let adjacencyList = Array.from({length: numCourses}, ()=>[])
        let inDegree = new Array(numCourses).fill(0)
        for(let [dest, src] of prerequisites){
            adjacencyList[src].push(dest)
            inDegree[dest]++
        }
        //khan's algo - topological sort
        let queue = []
        for(let i=0; i<numCourses; i++){
            if(inDegree[i]===0)
                queue.push(i)
        }
        let res = []
        let count = 0
        while(queue.length>0){
            let top = queue.shift()
            res.push(top)
            count++
            for(let neighbor of adjacencyList[top]){
                inDegree[neighbor]--
                if(inDegree[neighbor] === 0)
                    queue.push(neighbor)
            }
        }
        return count === numCourses? res : []
    }
}
