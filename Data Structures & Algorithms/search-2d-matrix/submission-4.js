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
            if(target>=matrix[i][0] && target<=matrix[i][cols-1]){
                //binary search
                let low = 0
                let high = cols-1
                while(low<=high){
                    let mid = low + Math.floor((high-low)/2)
                    if(target===matrix[i][mid]){
                        return true
                    }else if(target < matrix[i][mid]){
                        high = mid-1
                    }else{
                        low = mid+1
                    }
                }
                return false
            }else{
                continue
            }
        }
        return false
    }
}
