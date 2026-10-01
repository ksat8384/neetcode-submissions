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
            if(this.kWorks(k, piles, h)){
                high=k
            }else{
                low=k+1
            }
        }
        return low
    }
    kWorks(k, piles, h){
        let hours = 0
        for(let p of piles)
        {
            hours += Math.ceil(p/k)
        }
        return hours <= h
    }
}
