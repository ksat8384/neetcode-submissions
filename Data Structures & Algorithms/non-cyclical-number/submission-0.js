class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let seen = new Set()
        while(n!==1 && !seen.has(n)){
            seen.add(n)
            n=this.getNextNum(n)
        }
        return n===1
    }

    getNextNum(num){
        let totalSum = 0
        while(num>0){
            let lastDigit = num%10
            totalSum += lastDigit**2
            num = Math.floor(num/10)
        }
        return totalSum
    }
}
