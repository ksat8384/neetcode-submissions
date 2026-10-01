class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let low = 1
        let high = Math.max(...piles)
        while(low<high){
            let k = Math.floor((low+high)/2)
            if(this.checkThisKWorks(k, piles, h)){
                high=k
            }else{
                low=k+1
            }
        }
        return low
    }

    checkThisKWorks(rate, piles, h){
        let totalHours = 0
        for(let p of piles){
            totalHours += Math.ceil(p/rate)
        }
        return totalHours<=h
    }
}
