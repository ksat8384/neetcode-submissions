class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length
        let cols = matrix[0].length

        let top=0
        let bottom=rows-1
        let targetRow = -1
        while(top<=bottom){
            let mid = top + Math.floor((bottom-top)/2)
            if(target>=matrix[mid][0] 
            && target<=matrix[mid][cols-1]){
                  //row found
                  targetRow = mid 
                  break; 
            }else if(target<matrix[mid][0]){
                bottom=mid-1
            }else{
                top=mid+1
            }
        }
        if(targetRow === -1){
            return false
        }
        return this.binarySearch(matrix[targetRow], target)
    }

    binarySearch(array, target){
        let low=0
        let high=array.length-1
        while(low<=high){
             let mid = low + Math.floor((high-low)/2)
             if(target===array[mid]){
                return true
             }else if(target>array[mid]){
                low=mid+1
             }else{
                high=mid-1
             }
        }
        return false
    }
}
