class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let isNegative = x<0
        x = Math.abs(x)
        let reversedNum =  x.toString().split('').reverse().join('')
        if(reversedNum > 2**31) 
            return 0
        return isNegative? -Number(reversedNum) : Number(reversedNum)    
    }
}
