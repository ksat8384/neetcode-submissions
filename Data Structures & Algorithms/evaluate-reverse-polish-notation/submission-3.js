class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack=[]
        for(let token of tokens){
            if(token !== "+" && token !== "-" && token !== "*"&& token !== "/"){
                stack.push(Number(token))
            }else{
               let second = stack.pop()
               let first = stack.pop()
               let calculatedVal = 0
               switch(token){
                case "+":
                  calculatedVal = first + second
                  break;
                case "-":
                 calculatedVal = first - second
                 break;
                case "*":
                 calculatedVal = first * second
                 break;
                case "/":
                 calculatedVal = Math.trunc(first / second)
                 break;
               }
               stack.push(calculatedVal)
            }
        }
        return stack.pop()
    }
}
