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
            if(char === "(" || char==="[" || char==="{"){
                stack.push(char)
            }else{
                if(stack.length === 0){
                    return false
                }
                let top = stack.pop()
                if(top ==="(" && char!==")"
                ||top ==="[" && char!=="]"
                || top ==="{" && char!=="}"
                ){
                    return false
                }
            }
        }
        return stack.length===0
    }
}
