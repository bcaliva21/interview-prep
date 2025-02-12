class ListNode {
	val: number
	next: ListNode | null
	constructor(val: number, next?: ListNode | null = null) {
		this.val = val
		this.next = next
	}
}

function isPalidrome(head: ListNode | null): boolean {
	if (!head) return false
	let mid = getMid(head)
	let current = mid
	let prev = null

	while (current) {
		let temp = current.next
		current.next = prev
		prev = current
		current = temp
	}

	let start = head
	mid = prev
	while (mid) {
		if (start.val !== mid.val) {
			return false
		}
		start = start.next
		mid = mid.next
	}

	return true
}

function getMid(head: ListNode): ListNode {
	let slow = head
	let fast = head
	while (fast && fast.next) {
		slow = slow.next
		fast = fast.next.next
	}

	return slow
}

