class ListNode {
	val: number
	next: ListNode | null
	constructor(val: number = 0, next?: ListNode | null = null) {
		this.val = val
		this.next = next
	}
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
	if (!head || left == right) return head

	let dummyNode = new ListNode(0, head)
	let leftPrevious = dummyNode
	let current = head
	let pos = 1
	let temp = null

	while (pos < left) {
		pos++
		leftPrevious = current
		current = current.next
	}

	let prev = null

	while (pos <= right) {
		pos++
		temp = current.next
		current.next = prev
		prev = current
		current = temp
	}

	leftPrevious.next.next = current
	leftPrevious.next = prev

	return dummyNode.next
}
