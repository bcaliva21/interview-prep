function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val)
	this.next = (next === undefined ? null : next)
}

function addTwoNumber(l1,l2) {
	const l3 = new ListNode()
	let current = l3
	let carry = 0

	while (l1 || l2 || carry) {
		let total = carry
		if (l1) {
			total += l1.val
			l1 = l1.next
		}
		if (l2) {
			total += l2.val
			l2 = l2.next
		}

		let num = total % 10
		carry = Math.floor(total / 10)
		current = new ListNode(num)
		current = current.next
	}

	current.next = null
	return l3.next
}
