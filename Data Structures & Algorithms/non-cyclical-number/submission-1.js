class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let slow = n
        let fast = this.getNextNum(n)
        while(fast!==1 && slow!==fast){
            slow = this.getNextNum(slow)
            fast = this.getNextNum(this.getNextNum(fast))
        }
        return fast === 1
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
