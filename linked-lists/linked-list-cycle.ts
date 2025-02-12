class ListNode {
	val: number
	next: ListNode | null
	constructor(val: number, next?: ListNode | null = null) {
		this.val = val
		this.next = next
	}
}

function hasCycle(head: ListNode | null): boolean {
	if (!head || !head.next) return false

	let fast = head
	let slow = head

	while (fast && fast.next) {
		slow = slow.next
		fast = fast.next.next
		if (slow === fast) {
			return true
		}
	}

	return false
}
