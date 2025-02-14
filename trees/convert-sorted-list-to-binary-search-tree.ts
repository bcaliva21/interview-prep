class TreeNode {
	constructor(
		public val: number = 0,
		public left: TreeNode | null = null,
		public right: TreeNode | null = null
	) {}
}

class ListNode {
	constructor(
		public val: number = 0,
		public next: ListNode | null = null
	) {}
}

function sortedListToBST(head: ListNode | null): TreeNode {
	function createBST(head: ListNode | null): TreeNode {
		if (!head) return null
		const mid = getMid(head)
		let root = new TreeNode(mid.val)
		if (head === mid) return root
		root.left = createBST(head)
		root.right = createBST(mid.next)
		return root
	}

	return createBST(head)
}

function getMid(head: ListNode: null): ListNode {
	let slow = head
	let fast = head
	let prev = head
	while (fast && fast.next) {
		prev = slow
		slow = slow.next
		fast = fast.next.next
	}
	if (prev != null) prev.next = null
	return slow
}

