class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length % 2 !== 0)
            return false
        let stack = []
        for(let char of s){
            if(char === "(" || char ==="[" || char==="{"){
                stack.push(char)
            }else{
                let lastChar = stack.pop()
                if(lastChar!=="[" && char==="]"
                   || lastChar !=="{" && char==="}"
                   || lastChar !=="(" && char===")"
                ){
                    return false
                }   
            }    
        }
        return stack.length===0
    }
}
