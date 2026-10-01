class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack=[]
        for(let token of tokens){
            console.log("stack =", stack)
            if(token === "+"
            ||token === "-"
            ||token === "*"
            ||token === "/"
            ){
               let operand2 = Number(stack.pop())
               let operand1 = Number(stack.pop())
               let result 
               switch(token){
                    case "+":
                        result = operand1 + operand2
                     break;   
                    case "-":
                        result = operand1 - operand2
                     break;   
                     case "*":
                        result = operand1 * operand2
                     break; 
                     case "/":
                        result = Math.trunc(operand1 / operand2)
                     break; 
               } 
               stack.push(result)
            }else{
                stack.push(token)
            }
        }
        return stack.pop()
    }
}
