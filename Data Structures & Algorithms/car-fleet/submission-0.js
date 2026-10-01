class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        if(position.length===0)
            return 0
        let cars = position.map((pos, i)=>({pos, speed: speed[i]}))
        cars.sort((a,b)=>a.pos-b.pos)
        let n = position.length
        let stack = []
        for(let i=n-1; i>=0; i--){
            const time = (target-cars[i].pos)/cars[i].speed
            if(stack.length===0 || time>stack[stack.length-1]){
                stack.push(time)
            }
        }
        return stack.length
        






$0
    }
}
