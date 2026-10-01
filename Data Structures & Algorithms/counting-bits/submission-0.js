class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let result = []
        for(let i=0; i<=n; i++){
            result.push(this.countBitHelper(i))
        }
        return result
    }

    countBitHelper(n){
        let count = 0
         while(n!==0){
            count++
            n = n & n-1
        }
        return count
    }
}
