class CountSquares {
    constructor() {
        this.freqMap = new Map()
    }

    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        let key = `${point[0]},${point[1]}`
        this.freqMap.set(key, (this.freqMap.get(key)||0) +1)
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        let [px,py]=point
        let res = 0
        for(let [key, diagonalCount] of this.freqMap.entries()){
              let [x,y] = key.split(',').map(Number)
            //diagonal doesn't exist, skip
            if(Math.abs(px-x) !== Math.abs(py-y) || x===px || y===py)
                continue
            
            let count1 =  this.freqMap.get(`${px},${y}`) || 0
            let count2 = this.freqMap.get(`${x},${py}`) || 0
            res += diagonalCount * count1 * count2
        }
        return res
    }

   
}
