function reverseList(head: ListNode | null): ListNode | null {
    let current = head
    let prev = null

    while (current) {
        let temp = current.next
        current.next = prev
        prev = current
        current = temp
    }

    return prev
};
