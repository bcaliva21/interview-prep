class ListNode {
	val: number
	next: ListNode | null
	constructor(val: number, next?: ListNode | null = null) {
		this.val = val
		this.next = next
	}
}

function oddEvenListNaive(head: ListNode | null): ListNode | null {
	if (!head || !head.next || !head.next.next) return head
	let evenHead = head.next
	let odd = head
	let even = head.next

	while (even && even.next) {
		odd.next = even.next
		odd = odd.next
		even.next = odd.next
		even = even.next
	}

	odd.next = evenHead
	return head
}

function oddEvenListInPlace(head: ListNode | null): ListNode | null {
    if (!head || !head.next || !head.next.next) return head
    let size = 0
    let end = head
    while (end.next) {
        size++
        end = end.next
    }

    size = size % 2 === 0 ? size / 2 : (size / 2) + 1
    let temp = head
    while (size > 0) {
        size--
        end.next = temp.next
        temp.next = temp.next.next
        end.next.next = null
        end = end.next
        temp = temp.next
    }

    return head
}

