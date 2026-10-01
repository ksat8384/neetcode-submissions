class MinStack {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let currentMin = val
        if(this.stack.length>0){
            if(this.stack[this.stack.length-1].currentMin > val){
                currentMin = val
            }else{
                currentMin = this.stack[this.stack.length-1].currentMin
            }
        }

        this.stack.push({value: val, currentMin: currentMin})

    }

    /**
     * @return {void}
     */
    pop() {
        return this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.length>0? this.stack[this.stack.length-1].value : -1
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack.length>0? this.stack[this.stack.length-1].currentMin : -1
    }
}
