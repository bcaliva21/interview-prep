class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}

function deleteMiddle(head: ListNode | null): ListNode | null {
	if (!head || !head.next) return null
	const oneBeforeMid = getOneBeforeMid(head)

	if (oneBeforeMid.next) {
		oneBeforeMid.next = oneBeforeMid.next.next
	}

	return head
}

function getOneBeforeMid(head: ListNode): ListNode {
	let slow = head
	let fast = head
	let prev = null
	while (fast && fast.next) {
		prev = slow
		slow = slow.next
		fast = fast.next.next
	}

	return prev
}
