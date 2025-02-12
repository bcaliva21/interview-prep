class ListNode {
	val: number
	next: ListNode | null
	constructor(val: number, next?: ListNode | null = null) {
		this.val = val
		this.next = next
	}
}

function hasCycleNaive(head: ListNode | null): ListNode | null {
	if (!head || !head.next) return null

    let current = head
    let map = new Map()

    while (current) {
        if (map.has(current)) {
            return map.get(current)
        } else {
            map.set(current, current)
            current = current.next
        }
    }  

    return null
}

function hasCycle(head: ListNode | null): ListNode | null {
	if (!head || !head.next) return null
	let fast = head
	let slow = head
	let left = head
	let right = null

	while (fast && fast.next) {
		slow = slow.next
		fast = fast.next.next
		if (slow === fast) {
			right = fast
			break
		}
	}

	if (right) {
		while (right !== left) {
			right = right.next
			left = left.next
		}
	} else {
		return null
	}

	return right
}
