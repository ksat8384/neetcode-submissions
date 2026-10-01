class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length
        let cols = matrix[0].length
        for(let i=0; i<rows; i++){
            if(target >= matrix[i][0] && target<=matrix[i][cols-1]){
                //row identified
                //perform binary search
                return this.binarySearch(target, matrix[i])
            }
        }
        return false
    }
    binarySearch(target, array){
        let low = 0
        let high = array.length-1
        while(low<=high){
            let mid = low + Math.floor((high-low)/2)
            if(target===array[mid]){
                return true
            }else if(target>array[mid]){
                low = mid+1
            }else{
                high = mid-1
            }
        }
        return false
    }
}
