class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity=capacity
        this.cache = new Map()
        this.head = new Node(-1,-1)
        this.tail = new Node(-1,-1)
        this.head.next=this.tail
        this.tail.prev=this.head
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.has(key)){
            return -1
        }
        let node = this.cache.get(key)
        this.remove(node)
        this.add(node)
        return node.value
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)){
           let node = this.cache.get(key)
           node.value = value
           this.remove(node)
           this.add(node)
           return
        }

        if(this.cache.size>=this.capacity){
            let lruNode = this.tail.prev
            this.remove(lruNode)
            this.cache.delete(lruNode.key)
        }
        let node = new Node(key, value)
        this.add(node)
        this.cache.set(key, node)
    }

    add(node){
       let nextNode = this.head.next
       this.head.next=node
       node.next=nextNode
       node.prev=this.head
       nextNode.prev=node
    }

    remove(node){
        let nextNode = node.next
        let prevNode = node.prev
        prevNode.next = nextNode
        nextNode.prev = prevNode
    }
}

class Node{
    constructor(key, value){
        this.key=key
        this.value=value
        this.prev=null
        this.next=null
    }
}
