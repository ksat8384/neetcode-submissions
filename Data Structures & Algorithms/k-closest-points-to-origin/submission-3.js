class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        // // Sort array in ascending order of their squared distance
        //a-point1, b-point2
        //sort in ascending
       points.sort((a,b)=>(a[0]*a[0]+a[1]*a[1]) - (b[0]*b[0]+b[1]*b[1]))
       // // Slice out the first k elements
       return points.slice(0,k)
    }

}