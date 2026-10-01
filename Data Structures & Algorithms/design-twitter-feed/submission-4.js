class Twitter {
    constructor() {
        this.userIdToUsersMap = new Map()
        this.timeStamp = 0
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.timeStamp++
        if(!this.userIdToUsersMap.has(userId)){
            this.userIdToUsersMap.set(userId, new User(userId))
        }
        let user = this.userIdToUsersMap.get(userId)
        user.tweets.push({id: tweetId, time:this.timeStamp})
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        if(!this.userIdToUsersMap.has(userId))
            return []
        let user = this.userIdToUsersMap.get(userId)
        let followingUsers = [...user.following, user]
        let minHeap = new MinPriorityQueue((tweet)=>tweet.time)
        let tweets = []
        for(let followingUser of followingUsers){
            let recentTweets = followingUser.getTopNTweets(10)
            for(let tweet of recentTweets){
                minHeap.enqueue(tweet)
                if(minHeap.size()>10){
                    minHeap.dequeue()
                }
            }
        }
        while(minHeap.size()>0){
            tweets.unshift(minHeap.dequeue().id)
        }
        return tweets
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (followerId === followeeId) return; 

         if (!this.userIdToUsersMap.has(followerId)) {
            this.userIdToUsersMap.set(followerId, new User(followerId));
        }
        
        if (!this.userIdToUsersMap.has(followeeId)) {
            this.userIdToUsersMap.set(followeeId, new User(followeeId));
        }
        
      let followerUser = this.userIdToUsersMap.get(followerId)
      let followingUser = this.userIdToUsersMap.get(followeeId)

       if (!followerUser.following.includes(followingUser)) {
            followerUser.following.push(followingUser)
            followingUser.follower.push(followerUser)
       }
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(!this.userIdToUsersMap.has(followerId) || !this.userIdToUsersMap.has(followeeId))
            return 
      let followerUser = this.userIdToUsersMap.get(followerId)
      let followingUser = this.userIdToUsersMap.get(followeeId)

      followerUser.following = followerUser.following.filter((user)=> user!==followingUser)
      followingUser.follower = followingUser.follower.filter((user)=> user!==followerUser)
    }
}

class User{
    constructor(id){
        this.id = id
        this.follower = []
        this.following = []
        this.tweets = []
    }
    getTopNTweets(n){
        return this.tweets.slice(-n)
    }
}