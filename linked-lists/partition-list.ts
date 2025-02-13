class ListNode {
    constructor(
        public val: number = 0,
        public next: ListNode | null = null
    ) { }
}

function partition(head: ListNode | null, x: number): ListNode | null {
    const left = new ListNode()
    const right = new ListNode()
    let lTail = left
    let rTail = right

    while (head) {
        if (head.val < x) {
            lTail.next = head
            lTail = lTail.next
        } else {
            rTail.next = head
            rTail = rTail.next
        }
        head = head.next
    }

    lTail.next = right.next
    rTail.next = null

    return left.next
}
