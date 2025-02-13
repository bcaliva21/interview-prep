class LinkNode {
    constructor(
        public val: number = 0,
        public next: LinkNode | null = null
    ) { }
}

function reverse(head: LinkNode | null): LinkNode | null {
    let current = head
    let prev: LinkNode | null = null
    let temp: LinkNode | null = null

    while (current) {
        temp = current.next
        current.next = prev
        prev = current
        current = temp
    }

    return prev
}

function removeNodes(head: LinkNode | null): LinkNode | null {
    const reversed = reverse(head)
    let prev: LinkNode | null = null
    let current = reversed
    let max = -Infinity

    while (current) {
        if (current.val >= max) {
            max = current.val
            prev = current
        } else {
            prev!.next = current.next
        }
        current = current.next
    }

    return reverse(reversed)


}
