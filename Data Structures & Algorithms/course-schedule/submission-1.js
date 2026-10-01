class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
       let adjList = Array.from({length: numCourses}, ()=>[])
       let inDegree = new Array(numCourses).fill(0)
       for(let [dest, src] of prerequisites){
          adjList[src].push(dest)
          inDegree[dest]++
       }
       let queue = []
       for(let i=0; i<numCourses; i++){
         if(inDegree[i]==0)
            queue.push(i)
       }
       let res = []
       while(queue.length>0){
         let top = queue.shift()
         res.push(top)
         for(let neighbor of adjList[top]){
            inDegree[neighbor]--
            if(inDegree[neighbor]==0){
                queue.push(neighbor)
            }
         }
       }
       return res.length === numCourses

    }
}
