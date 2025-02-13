class ListNode {
    constructor(
        public val: number = 0,
        public next: ListNode | null = null
    ) { }
}

function insertionSortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head
    // we will store the sorted list at next
    const sorted: ListNode = new ListNode()
    // we will start from the unsorted head
    let current: ListNode | null = head
    while (current) {
        let prev = sorted
        while (prev.next && prev.next.val < current.val) {
            prev = prev.next
        }
        const next = current.next
        current.next = prev.next
        prev.next = current
        current = next
    }

    return sorted.next

}
