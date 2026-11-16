class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let minOpen = 0
        let maxOpen = 0
        for(let char of s){
            if(char==='('){
                minOpen++
                maxOpen++
            }else if(char === ')'){
                 minOpen--
                 maxOpen--
            }else{
                 minOpen-- // * as )
                 maxOpen++ // * as (
            }
            if(maxOpen<0) //too many close, no open
                return false
            if(minOpen<0){ //consider * as "" instead )
                minOpen = 0
            }    
        }
        return minOpen===0
    }
}
