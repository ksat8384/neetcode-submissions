class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        let [tx,ty,tz]=target
        let foundX=false
        let foundY=false
        let foundZ=false
        for(let [ai,bi,ci] of triplets){
            //filter triplets less than or equal totarget
            if(ai<=tx && bi<=ty && ci<=tz){
                if(ai===tx)
                    foundX=true
                if(bi===ty)
                    foundY=true
                if(ci===tz)
                    foundZ=true
                if (foundX && foundY && foundZ)
                    return true            
            }
        }
        return false
        
    }   
}
