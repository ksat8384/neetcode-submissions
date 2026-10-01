class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
       this.capacity = capacity
       this.map = new Map()
       this.head = new Node(-1, -1)
       this.tail = new Node(-1, -1)
       this.head.next = this.tail
       this.tail.prev = this.head
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.map.has(key)){
           return -1     
        }
        let node = this.map.get(key)
        this.remove(node)
        this.map.delete(key)

        this.add(node)
        this.map.set(key, node)
        return node.val
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
            let node = this.map.get(key)
            this.remove(node)
            this.map.delete(key)
        }
        if(this.map.size >= this.capacity){
            let lruNode = this.tail.prev
            this.remove(lruNode)
            this.map.delete(lruNode.key)
        }
        let newNode = new Node(key, value)
        this.add(newNode)
        this.map.set(key, newNode)
        
    }

    add(node){
        let headNext = this.head.next
        node.prev = this.head
        node.next = headNext
        this.head.next = node
        headNext.prev = node
    }

    remove(node){
        let nextNode = node.next
        let prevNode = node.prev
        prevNode.next = nextNode
        nextNode.prev = prevNode
    }
}

class Node{
    constructor(key, val){
        this.key = key
        this.val = val
        this.prev = null
        this.next = null
    }
}
