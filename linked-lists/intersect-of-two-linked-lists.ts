class ListNode {
	val: number
	next: ListNode | null
	constructor(val: number, next?: ListNode | null = null) {
		this.val = val
		this.next = next
	}
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
	if (!headA || !headB) return null

	let ptr1 = headA
	let ptr2 = headB

	while (ptr1 !== ptr2) {
		ptr1 = ptr1 ? ptr1.next : headB
		ptr2 = ptr2 ? ptr2.next : headA
	}

	return ptr1
}
