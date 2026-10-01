class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
      if(!this.keyStore.get(key)){
         this.keyStore.set(key, [])
      }  
      this.keyStore.get(key).push({value, timestamp})
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
       let arr = this.keyStore.get(key)
       if(!arr)
            return ""
       let low = 0
       let high = arr.length-1
       let res = "" 
       while(low<=high){
        let mid = low + Math.floor((high-low)/2)
        if(arr[mid].timestamp <=timestamp){
            res = arr[mid].value
            low = mid+1
        }else{
            high = mid-1
        }
       }
       return res
    }
}
