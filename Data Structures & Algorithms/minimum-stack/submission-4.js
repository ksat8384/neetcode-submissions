class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
       let currentMin = this.minStack.length === 0
       ? val: Math.min(val, this.getMin())
       this.stack.push(val)
       this.minStack.push(currentMin)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.length>0? this.stack[this.stack.length-1]: -1
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack.length>0? this.minStack[this.minStack.length-1]: -1
    }
}
