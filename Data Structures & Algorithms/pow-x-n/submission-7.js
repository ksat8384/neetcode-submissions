class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        if(n===0)
            return 1
        if(n<0)
            return 1/this.myPow(x, -n)   
        let temp = this.myPow(x, Math.floor(n/2))  
        if(n%2===0){
            return temp * temp
        }else{
            return x * temp * temp
        }   
    }
}
