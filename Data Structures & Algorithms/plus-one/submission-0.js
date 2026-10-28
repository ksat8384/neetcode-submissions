class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let n = digits.length
        let carry = 1
        let i = n-1
        while(i>=0){
            if(digits[i]==9){
                digits[i] = 0
                carry=1
            }else{
                 digits[i] += carry
                 carry=0
                break;
            }
            i--
        }
        if(carry===1){
            digits.unshift(1)
        }
        return digits
    
    }
}
