class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let openParenthesisStack = []
        let starParenthesisStack = []
        let n = s.length
        for(let i=0; i<n; i++){
            let char = s[i]
            if(char === '('){
                openParenthesisStack.push(i)
            }else if (char ==='*'){
                starParenthesisStack.push(i)
            }else{
                //char is ")"
                if(openParenthesisStack.length>0){
                    openParenthesisStack.pop()
                }else if(starParenthesisStack.length>0)     {
                    starParenthesisStack.pop()
                }else{
                    return false
                }
            }
        }
        while(openParenthesisStack.length>0 && starParenthesisStack.length>0){
            if(openParenthesisStack[openParenthesisStack.length-1] < starParenthesisStack[starParenthesisStack.length-1]){
                openParenthesisStack.pop()
                starParenthesisStack.pop()
            }else{
                return false
            }
        }
        return openParenthesisStack.length===0
    }
}
