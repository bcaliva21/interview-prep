class LNode {
  constructor(
    public tweetId: number = 0,
    public userId: number = 0,
    public next: LNode | null = null
  ) {}
}

class Feed {
  constructor(
    public head: LNode | null = null,
    public next: LNode | null = null
  ) {}

  makeNodeHead(node: LNode): void {
    if (!this.head) {
      this.head = node
    } else {
      const oldHead = this.head
      this.head = node
      node.next = oldHead
    }
  }
}

class Twitter {
  constructor(
    public feed: Feed = new Feed(null,null),
    public following: { [key: number]: { [key: number]: boolean } } = {},
  ) {}

  postTweet(userId: number, tweetId: number): void {
    const tweet = new LNode(tweetId, userId, null)
    this.feed.makeNodeHead(tweet)
  }

  getNewsFeed(userId: number): number[] {
    let current = this.feed.head
    const results: number[] = []

    const followees = this.following[userId] ? Object.keys(this.following[userId]) : []
    while (current && results.length < 10) {
      if (current.userId === userId || followees.includes(current.userId.toString())) {
        results.push(current.tweetId)
      }
      current = current.next
    }

    return results
  }

  follow(followerId: number, followeeId: number): void {
    if (this.following[followerId]) {
      this.following[followerId][followeeId] = true
    } else {
      this.following[followerId] = { [followeeId]: true }
    }
  }

  unfollow(followerId: number, followeeId: number): void {
    if (this.following[followerId]) {
      delete this.following[followerId][followeeId]
    }
  }
}
