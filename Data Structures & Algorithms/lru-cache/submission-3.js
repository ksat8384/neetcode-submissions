class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.map = new Map()
        this.capacity = capacity
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.map.has(key)){
           let value = this.map.get(key)
           this.map.delete(key)
           this.map.set(key, value) 
           return value
        }
        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
       
        if(this.map.has(key)){
            this.map.delete(key)
        }else if(this.map.size === this.capacity){
            let oldestKey = this.map.keys().next().value
            this.map.delete(oldestKey)
        }
        this.map.set(key, value)
    }
}
