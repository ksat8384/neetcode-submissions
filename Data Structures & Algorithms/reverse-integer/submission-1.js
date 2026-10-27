class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let isNegative = x<0
        x=Math.abs(x) 
        let reversedNum = 0
        while(x>0){
            let lastdigit = x%10
            reversedNum = reversedNum*10 + lastdigit
            x = Math.floor(x/10)
        }
        if(isNegative && reversedNum > 2**31)
            return 0
         if(!isNegative && reversedNum > 2**31-1)
            return 0    

        return isNegative? -reversedNum : reversedNum
    }
}
