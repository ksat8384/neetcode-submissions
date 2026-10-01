class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let n = s.length
        const memo = new Array(n).fill(-1);
        return this.waysToDecode(s, 0, memo)
    }

    waysToDecode(s,index, memo){
        if(index >= s.length){
            return 1
        }
        if(memo[index] !== -1)
            return memo[index]
        let ways =0
        //single digit
        if(s[index] !== "0"){
            ways = this.waysToDecode(s, index+1, memo)
        }
        //double digit
        if(index+1<=s.length && s[index]=="1" && s[index+1]<="9"
        || s[index]=="2" && s[index+1]<="6"
        ){
            ways += this.waysToDecode(s, index+2, memo)
        }
        memo[index]=ways
        return memo[index]
    }

}
