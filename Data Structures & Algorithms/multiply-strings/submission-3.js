class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
        if(num1==="0" || num2==="0")
            return "0"
        let res = new Array(num1.length+num2.length).fill(0)
        let num1Reverse = num1.split("").reverse().join("")
        let num2Reverse = num2.split("").reverse().join("")

        for(let i1=0; i1<num1.length; i1++){
                let n1 = parseInt(num1Reverse[i1])
            for(let i2=0; i2<num2.length; i2++){
                let n2= parseInt(num2Reverse[i2])

                let sum = (n1*n2)+res[i1+i2]
                res[i1+i2]=sum%10
                res[i1+i2+1]+=Math.floor(sum/10)
            }
        }
        let resReverse = res.reverse()
        let beg=0
        while(beg<resReverse.length && resReverse[beg]===0){
            beg++
        }
        let result = ""
        while(beg<resReverse.length){
            result += resReverse[beg]
            beg++
        }
        return result
    }
}

   