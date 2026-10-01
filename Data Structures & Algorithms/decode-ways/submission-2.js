class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let memo = new Array(s.length).fill(-1)
        return this.decodeRecur(s, 0, memo)
    }

    decodeRecur(s, index, memo){
        if(index >= s.length){
            return 1
        }
        if(memo[index] !== -1)
            return memo[index]
        let res = 0
        if(s[index]!=="0")
            res = this.decodeRecur(s, index+1, memo)

        if(index+1<s.length 
        && s[index]=="1" && s[index+1]<="9"
        || s[index]=="2" && s[index+1]<="6"){
            res += this.decodeRecur(s, index+2, memo)
        }
        memo[index] = res
        return memo[index]
    }
}
