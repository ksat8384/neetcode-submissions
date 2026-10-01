class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length
        let cols = matrix[0].length
        
        let top = 0
        let bottom = rows-1
        let targetRow = -1
        while(top<=bottom){
            let midRow = top + Math.floor((bottom-top)/2)
            if(target>=matrix[midRow][0] && target<=matrix[midRow][cols-1]){
                //row found
                targetRow=midRow
                break
            }else if(target<matrix[midRow][0]){
                bottom=midRow-1
            }else{
                 top=midRow+1
            }
        }
        if(targetRow===-1){
            return false
        }
        return this.binarySearch(target, matrix[targetRow])
    }

    binarySearch(target, array){
        let low = 0
        let high = array.length-1
        while(low<=high){
            let mid = low+Math.floor((high-low)/2)
            if(target === array[mid]){
                return true
            }else if(target<array[mid]){
                high = mid-1
            }else{
                low=mid+1
            }
        }
        return false
    }

}
